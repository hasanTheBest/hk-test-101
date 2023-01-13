import * as React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";

import { useQuery } from "react-query";

const URL = "https://hk-test-server.vercel.app/view";

export default function SectorCards({ refetchQuery, handleOpen }) {
  const {
    isError,
    isLoading,
    refetch,
    error: queryErr,
    data: queryData
  } = useQuery("viewSectors", () => {
    return fetch(URL).then((response) => response.json());
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

  if (refetchQuery) {
    refetch();
  }

  return (
    <>
      <Grid container spacing={4}>
        {queryData.map(({ _id, name, sectors, terms }, i) => (
          <Grid item key={_id}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {name}
                </Typography>
                <Typography variant="body2">
                  You are currently involved in sectors
                  <br />
                  And accepted our terms: {terms}
                </Typography>

                <List dense="dense">
                  {sectors.map((item, i) => (
                    <ListItem key={i}>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  variant="outlined"
                  color="primary"
                  onClick={() => handleOpen(_id)}
                >
                  Edit
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
