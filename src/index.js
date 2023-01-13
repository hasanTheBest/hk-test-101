import React from "react";
import ReactDOM from "react-dom";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import { Form, Formik } from "formik";
import { formikProps } from "./formikProps.js";
import TextInput from "./FormConponents/TextInput";
import MySelectInput from "./FormConponents/MySelectInput";
import MyTerms from "./FormConponents/MyTerms.js";

function App() {
  return (
    <Container maxWidth="md">
      <Typography
        variant="body1"
        component="p"
        style={{ marginBottom: "2rem" }}
      >
        Please enter your name and pick the Sectors you are currently involved
        in.
      </Typography>

      <Formik {...formikProps}>
        <Form
          as="Form"
          style={{ display: "flex", flexDirection: "column", gap: 32 }}
        >
          {/* Name */}
          <TextInput
            id="outlined-required"
            label="Name"
            variant="outlined"
            name="name"
          />

          {/* Sectors */}
          <MySelectInput
            labelId="sectors-labelId"
            id="sectors"
            label="Sectors"
            name="sectors"
          />

          {/* Terms */}
          <MyTerms label="I accepted terms and comditions" name="terms" />

          <Box>
            <Button type="submit" variant="contained" size="large">
              Submit
            </Button>
          </Box>
        </Form>
      </Formik>
    </Container>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
