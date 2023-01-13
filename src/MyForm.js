import React from "react";

import { useMutation } from "react-query";

import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import { Form, Formik } from "formik";

import toast from "react-hot-toast";

import { formikProps } from "./formikProps.js";

import TextInput from "./FormConponents/TextInput";
import MySelectInputDynamic from "./FormConponents/MySelectInputDynamic";
import MyTerms from "./FormConponents/MyTerms.js";

const ADD_USER_URL = "https://hk-test-server.vercel.app/add";

function MyForm({ setRefetchQuery }) {
  const {
    isError,
    isSuccess,
    isLoading,
    mutate,
    error: queryErr,
    data: queryData
  } = useMutation((payload) => {
    return fetch(ADD_USER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    }).then((res) => res.json());
  });

  // React query state
  if (isError) {
    toast.error(queryErr.message);
  }

  if (isSuccess) {
    if (queryData.insertedId) {
      toast.success("Successfully added a user");
      setRefetchQuery(true);
    }
  }

  return (
    <Formik
      {...formikProps}
      onSubmit={(values, { isSubmitting, resetForm }) => {
        mutate(values);

        // Reset the form to the initial values
        resetForm();
      }}
    >
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
        <MySelectInputDynamic
          labelId="sectors-labelId"
          id="sectors"
          label="Sectors"
          name="sectors"
        />

        {/* Terms */}
        <MyTerms label="I accepted terms and conditions" name="terms" />

        <Box>
          <Button
            type="submit"
            variant="contained"
            size="large"
            color="primary"
            disabled={isLoading ? true : false}
            // disabled={isSubmitting}
          >
            {isLoading ? "Saving..." : "Save"}
          </Button>
        </Box>
      </Form>
    </Formik>
  );
}

export default MyForm;
