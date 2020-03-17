import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles({
  root: {
    color: "red",
    "&$checked": {
      color: "red"
    }
  },
  checked: {},
  label: {
    color: "white"
  }
});

export default function Skills({ skills }) {
  const classes = useStyles();

  return (
    <FormControl component="fieldset" className={classes.formControl}>
      <FormGroup>
        {skills &&
          skills.map(({ id, skill }) => (
            <FormControlLabel
              key={id}
              control={
                <Checkbox
                  value={skill}
                  classes={{
                    root: classes.root,
                    checked: classes.checked
                  }}
                />
              }
              label={skill}
              className={classes.label}
            />
          ))}
      </FormGroup>
    </FormControl>
  );
}
