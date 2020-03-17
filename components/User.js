import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, ButtonGroup, CardMedia, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    color: "#fff",
    marginBottom: 40
  },
  name: {
    marginTop: 15,
    color: "#fff"
  },
  card: {
    minHeight: 400,
    margin: 20,
    width: 300,
    display: "flex",
    flexDirection: "column"
  },

  about: {
    color: "#fff",
    overflow: "hidden",
    textOverflow: "ellipsis",
    marginBottom: 20,
    height: 65
  },

  skills: {
    color: "#fff",
    display: "flex",
    marginBottom: 15
  },

  skill: {
    marginRight: 10
  },

  button: {
    color: "#fff",
    borderColor: "#fff",
    flexGrow: 1
  }
});

export default function User({
  id,
  name,
  avatar,
  about,
  site,
  twitter,
  skills
}) {
  const classes = useStyles();
  const truncate = content => {
    if (content && content.length > 120) {
      return content.slice(0, 120) + "...";
    } else {
      return content;
    }
  };

  return (
    <div className={classes.card}>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="285"
        image={
          avatar || `https://api.adorable.io/avatars/285/${name}$,${id}.png`
        }
      />
      <div>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className={classes.name}
        >
          {name}
        </Typography>
        <Typography variant="body2" component="p" className={classes.about}>
          {truncate(about)}
        </Typography>
        <div className={classes.skills}>
          {skills &&
            skills.map((skill, index) => (
              <Typography
                key={index}
                variant="body2"
                component="p"
                className={classes.skill}
              >
                {skill}
              </Typography>
            ))}
        </div>
        <ButtonGroup size="small" aria-label="small outlined button group">
          {site && <Button className={classes.button}>Site</Button>}
          {twitter && <Button className={classes.button}>Twitter</Button>}
        </ButtonGroup>
      </div>
    </div>
  );
}
