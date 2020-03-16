import React, { useState, useEffect } from "react";
import styled from "styled-components";
import fetch from "isomorphic-unfetch";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import User from "./components/User";
import Skills from "./components/Skills";

const fetchData = async endPoint => {
  try {
    const response = await fetch(endPoint, {
      headers: { "Content-Type": "application/json" }
    });
    if (response.status === 200) {
      return await response.json();
    } else {
      let error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  } catch (error) {
    console.log("Error página: ", error);
    return error;
  }
};

const useStyles = makeStyles({
  root: {
    marginTop: 50
  },
  users: {
    flexGrow: 1
  },
  container: {
    marginTop: 30
  },
  logo: {
    color: "#fff",
    fontWeight: "bold"
  },
  grid: {
    display: "flex",
    flexWrap: "wrap"
  }
});

const Home = () => {
  const [skills, setSkills] = useState([]);
  const [users, setUsers] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    fetchData("/api/skills").then(skills => setSkills(skills));
    fetchData("/api/users").then(users => setUsers(users));
  }, []);

  return (
    <div className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={1} />
        <Grid item xs={2}>
          <div>
            <Typography
              gutterBottom
              variant="h2"
              component="h1"
              className={classes.logo}
            >
              Blackedin
            </Typography>
          </div>
          <Skills skills={skills} />
        </Grid>
        <Grid item xs={8}>
          <div className={classes.grid}>
            {users.map((user, index) => (
              <User key={index} {...user} />
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
