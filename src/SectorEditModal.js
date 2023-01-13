import * as React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import ListSubheader from "@material-ui/core/ListSubheader";

import { useQuery } from "react-query";

import { SECTORS } from "./sectors";
import { toast } from "react-hot-toast";

const URL = "https://hk-test-server.vercel.app/view/";
const EDIT_URL = "https://hk-test-server.vercel.app/edit/";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

const validationSchema = Yup.object({
  name: Yup.string().max(30, "Maximum 30 character").required("Required"),
  terms: Yup.boolean()
    .required("Required")
    .oneOf([true], "You must agree our terms and condition"),
  sectors: Yup.array()
    .of(Yup.string())
    .min(1, "At least one item must be selected.")
});

export default function SectorEditModal({
  open,
  handleClose,
  modalId,
  setRefetchQuery
}) {
  const { isError, isLoading, error: queryErr, data: queryData } = useQuery(
    ["viewSectorByID", modalId],
    () => {
      return fetch(URL + modalId).then((response) => response.json());
    },
    {
      // The query will not execute until the userId exists
      enabled: !!modalId
    }
  );

  const formik = useFormik({
    initialValues: {
      ...queryData
    },
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const response = fetch(EDIT_URL + values["_id"], {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: values.name,
          terms: values.terms,
          sectors: values.sectors
        })
      }).then((res) => res.json());

      if (response.modifiedCount > 0) {
        toast.success(`Successfully edited ${values.name}`);
        setRefetchQuery(true);
        handleClose(true);
      }
    }
  });

  // React query state
  if (isError) {
    return (
      <Typography component="p" variant="h2" align="center" color="error">
        {queryErr.message}
      </Typography>
    );
  }

  if (isLoading) {
    return (
      <Typography component="p" variant="h2" align="center" color="primary">
        Loading...
      </Typography>
    );
  }

  const mappedSectors = Object.entries(SECTORS[0]).map(([key, value]) => {
    const mappedKey = <ListSubheader>{key}</ListSubheader>;

    const mappedValue = value.map((item) => (
      <MenuItem value={item}>{item}</MenuItem>
    ));

    return new Array(1).fill(mappedKey).concat(mappedValue);
  });

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby={modalId}
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id={modalId} variant="h6" component="h2">
            Edit Name and Sectors
          </Typography>

          <div>
            <form onSubmit={formik.handleSubmit}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Name"
                value={formik.values.name || ""}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />

              <FormControl
                fullWidth
                error={formik.touched.sectors && Boolean(formik.errors.sectors)}
              >
                <InputLabel id="select-sectors-label">Sectors</InputLabel>
                <Select
                  multiple
                  labelId="select-sectors-label"
                  id="sectors"
                  name="sectors"
                  value={formik.values.sectors}
                  label="Sectors"
                  onChange={formik.handleChange}
                  // renderValue={(value) => `⚠️  - ${value}`}
                >
                  {mappedSectors}
                </Select>
                <FormHelperText>
                  {formik.touched.sectors && formik.errors.sectors}
                </FormHelperText>
              </FormControl>

              <FormControl
                fullWidth
                required
                error={formik.touched.terms && Boolean(formik.errors.terms)}
                component="div"
              >
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        id="terms"
                        name="terms"
                        checked={formik.values.terms}
                        onChange={formik.handleChange}
                      />
                    }
                    label="I accepted terms and conditions"
                  />
                </FormGroup>
                <FormHelperText>
                  {formik.touched.terms && formik.errors.terms}
                </FormHelperText>
              </FormControl>

              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
              >
                Save
              </Button>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
