import React from "react";
import ReactDOM from "react-dom";

import { QueryClient, QueryClientProvider } from "react-query";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import { Toaster } from "react-hot-toast";

import MyForm from "./MyForm.js";
import SectorsCard from "./SectorsCard";
import SectorEditModal from "./SectorEditModal.js";

const queryClient = new QueryClient();

function App() {
  const [refetchQuery, setRefetchQuery] = React.useState(false);

  const [open, setOpen] = React.useState(false);
  const [modalId, setModalId] = React.useState("");
  const handleOpen = (id) => {
    setOpen(true);
    setModalId(id);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Container maxWidth="md">
          <Typography
            variant="body1"
            component="p"
            style={{ marginBottom: "2rem" }}
          >
            Please enter your name and pick the Sectors you are currently
            involved in.
          </Typography>

          <MyForm setRefetchQuery={setRefetchQuery} />

          <SectorsCard refetchQuery={refetchQuery} handleOpen={handleOpen} />
        </Container>

        <SectorEditModal
          modalId={modalId}
          open={open}
          handleClose={handleClose}
          setRefetchQuery={setRefetchQuery}
        />
      </QueryClientProvider>
      <Toaster />
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
