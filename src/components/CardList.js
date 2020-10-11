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
            <div className="user-list">
              {props.users.map((value, index) => (
                <Card
                  key={index}
                  income={value}
                  index={index}
                  // removeIncome={removeIncome}
                />
              ))}
            </div>
          </Grid>
          <Grid item xs={false} md={2}></Grid>
        </Grid>
      </div>
    </div>
  );
}
