import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardActionArea } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles({
  root: {
    marginLeft: 10,
    marginRight: 10,
  },
  media: {
    // width: 275,
    height: 150,
  },
  title: {
    fontSize: 14,
  },
});

export default function UserCard() {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Card className={classes.root} variant="outlined">
        <CardActionArea>
          <CardMedia
            component="img"
            image="https://via.placeholder.com/275x150"
            title="User Profile"
          />
        </CardActionArea>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          ></Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>  
  );
}
