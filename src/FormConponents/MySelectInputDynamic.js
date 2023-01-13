import React from "react";
import { useField } from "formik";
import { useQuery } from "react-query";

import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";
// import OutlinedInput from "@material-ui/core/OutlinedInput";

import InputError from "./InputError";
import { ListSubheader } from "@material-ui/core";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 6.5 + ITEM_PADDING_TOP,
      width: 300
    }
  }
};

const MySelectInput = ({ label, labelId, ...props }) => {
  const { isLoading, error, data } = useQuery("sectors", () =>
    fetch("https://hk-test-server.vercel.app/").then((res) => res.json())
  );

  const [field, meta] = useField({ ...props, type: "select" });

  // if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  const mappedSectors =
    data &&
    Object.entries(data[0])
      .slice(1)
      .map(([key, value]) => {
        const mappedKey = <ListSubheader>{key}</ListSubheader>;

        const mappedValue = value.map((item) => (
          <MenuItem value={item}>{item}</MenuItem>
        ));

        return new Array(1).fill(mappedKey).concat(mappedValue);
      });

  return (
    <>
      <Box sx={{ minWidth: 300 }}>
        <FormControl style={{ m: 1, width: 300 }}>
          <InputLabel id={labelId}>
            {isLoading ? "Loading..." : label}
          </InputLabel>
          <Select
            multiple
            {...field}
            {...props}
            // input={<OutlinedInput label={label} />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {mappedSectors}
          </Select>
        </FormControl>

        {meta.touched && meta.error && <InputError error={meta.error} />}
      </Box>
    </>
  );
};

export default MySelectInput;
