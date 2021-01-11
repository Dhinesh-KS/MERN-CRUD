import React, { useState, useEffect } from "react";
import { Button, TextField, withStyles } from "@material-ui/core";
import useForm from "./UseForm";

const styles = (theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  postBtn: {
    width: "50%",
  },
});

const initialFormState = {
  title: "",
  message: "",
};

const PostMessageForm = ({ classes, ...props }) => {
  const { values, setValues, handleInputChange } = useForm(initialFormState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <form
      autoComplete="off"
      noValidate
      className={`${classes.root} ${classes.form}`}
      onSubmit={handleSubmit}
    >
      <TextField
        name="title"
        variant="outlined"
        label="Title"
        fullWidth
        value={values.title}
        onChange={handleInputChange}
      />
      <TextField
        name="message"
        variant="outlined"
        label="Message"
        fullWidth
        multiline
        rows={4}
        value={values.message}
        onChange={handleInputChange}
      />
      <Button
        variant="contained"
        color="secondary"
        size="medium"
        type="submit"
        className={classes.postBtn}
      >
        Submit
      </Button>
    </form>
  );
};

export default withStyles(styles)(PostMessageForm);
