import * as Yup from "yup";

export const formikProps = {
  initialValues: {
    name: "",
    terms: false, // checkbox
    sectors: [] // select
  },
  validationSchema: Yup.object({
    name: Yup.string().max(30, "Maximum 30 character").required("Required"),
    terms: Yup.boolean()
      .required("Required")
      .oneOf([true], "You must agree our terms and condition"),
    sectors: Yup.array()
      .of(Yup.string())
      .min(1, "At least one item must be selected.")
  })

  // onSubmit: (value) => {
  //   alert(JSON.stringify(value, null, 2));
  // }
};
