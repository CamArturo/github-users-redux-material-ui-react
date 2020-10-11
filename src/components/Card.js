import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardActionArea } from "@material-ui/core";


const useStyles = makeStyles({
  root: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
  media: {
    height: 150,
  },
  title: {
    color: '#434343',
    fontSize: 14,
    textAlign: 'center',
  },
  cardFooter: {
    marginTop: 40,
  },
  box: {
    position: 'relative',
    backgroundColor: '#efefef',
    borderTop: '2px solid #D51B14',
    boxShadow: '2px 2px 3px 1px rgba(0,0,0,0.2)',
    borderRadius: 5,
    width: 'auto',
    margin: 0,
    padding: 10,
    display: 'flex',
    justifyContent: 'space-around',
  },
  wrapper: {
    position: 'relative',
  },
  followers: {
    color: '#434343',
    fontSize: 16,
    fontWeight: 600,
    textAlign: 'center',
  },
  text: {
    color: '#434343',
    fontSize: 12,
    fontWeight: 'normal',
    textAlign: 'center',
  }
  
});

export default function UserCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea>
        <CardMedia
          component="img"
          image={props.user.avatar_url}
          title="User Profile"
          key={props.user.avatar_url}
        />
      </CardActionArea>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          <h3>{props.user.login}</h3>
          <h3>{props.user.location}</h3>
          <p>{props.user.bio}</p>
          <div className={classes.cardFooter}>
            <div className={classes.box}>
              <div className={classes.wrapper}>
                <p className={classes.followers}>{props.user.followers}</p>
                <p className={classes.text}>Followers</p>
              </div>
              <div className={classes.wrapper}>
                <p className={classes.followers}>{props.user.following}</p>
                <p className={classes.text}>Following</p>
              </div>
              <div className={classes.wrapper}>
                <p className={classes.followers}>{props.user.public_repos}</p>
                <p className={classes.text}>Repositories</p>
              </div>
            </div>
          </div>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
