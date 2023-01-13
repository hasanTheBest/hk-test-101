import Typography from "@material-ui/core/Typography";

const InputError = ({ error }) => {
  return (
    <>
      <Typography variat="body2" component="p" color="error">
        {error}
      </Typography>
    </>
  );
};

export default InputError;
