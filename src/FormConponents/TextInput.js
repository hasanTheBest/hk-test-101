import { useField } from "formik";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import InputError from "./InputError";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <Box>
        <TextField {...field} {...props} label={label} />
        {meta.touched && meta.error && <InputError error={meta.error} />}
      </Box>
    </>
  );
};

export default TextInput;
