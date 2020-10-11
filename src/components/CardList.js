import Card from "./Card";
import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 40,
  },
}));

export default function CardList(props) {
  const classes = useStyles();

  return (
    <div className="card-list-container">
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={false} md={2}></Grid>
          <Grid item container xs={12} md={8}>
          <Grid container>
              {props.users.map((user, index) => (
                  <Grid item xs={4}>
                    <Card
                      key={index}
                      user={user}
                      index={index}
                      // removeIncome={removeIncome}
                    />
                  </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={false} md={2}></Grid>
        </Grid>
      </div>
    </div>
  );
}
