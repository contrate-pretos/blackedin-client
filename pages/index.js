import React, { useState, useEffect } from "react";
import styled from "styled-components";
import fetch from "isomorphic-unfetch";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import User from "./components/User";

const useStyles = makeStyles(theme => ({
  root: {},
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const getSkills = async () => {
  const url = "/api/skills";
  try {
    const response = await fetch(url, {
      headers: { "Content-Type": "application/json" }
    });
    if (response.status === 200) {
      const skills = await response.json();
      console.log("Skills: ", skills);
      return skills;
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

const getUsers = async () => {
  const url = "/api/users";
  try {
    const response = await fetch(url, {
      headers: { "Content-Type": "application/json" }
    });
    if (response.status === 200) {
      const users = await response.json();
      return users;
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

const Home = () => {
  const [skills, setSkills] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getSkills().then(skills => setSkills(skills));
    getUsers().then(users => setUsers(users));
  }, []);

  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </Grid>
      <Grid item xs>
        <Grid container item spacing={3}>
          {users.map((user, index) => (
            <Grid item xs={3} key={index}>
              <User key={index} {...user} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
