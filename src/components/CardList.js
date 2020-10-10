import Card from "./Card";
import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function CardList() {
  const classes = useStyles();

  return (
    <div className="card-list-container">
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={false} md={2}>
          </Grid>
          <Grid item container xs={12} md={8}>
            <Grid item xs={4}>
                <Card></Card>
            </Grid>
            <Grid item xs={4}>
                <Card></Card>
            </Grid>
            <Grid item xs={4}>
                <Card></Card>
            </Grid>
          </Grid>
          <Grid item xs={false} md={2}>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
