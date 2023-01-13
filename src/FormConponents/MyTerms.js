import { useField } from "formik";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import InputError from "./InputError";

const MyTerms = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox {...field} {...props} />}
          label={label}
        />

        {meta.touched && meta.error && <InputError error={meta.error} />}
      </FormGroup>
    </>
  );
};

export default MyTerms;
