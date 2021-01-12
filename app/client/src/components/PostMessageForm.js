import React, { useState, useEffect } from "react";
import { Button, TextField, withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { create, update } from "../redux/index";
import ButterToast, { Cinnamon } from "butter-toast";
import useForm from "./UseForm";
import { AssignmentTurnedIn } from "@material-ui/icons";

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
  useEffect(() => {
    if (props.currentId != 0) {
      setValues({
        ...props.postMessageList.find((x) => x._id == props.currentId),
      });
      setErrors({});
    }
  }, [props.currentId]);

  const validate = () => {
    let temp = { ...errors };
    temp.title = values.title ? "" : "This field is required.";
    temp.message = values.message ? "" : "This field is required.";
    setErrors({
      ...temp,
    });
    return Object.values(temp).every((x) => x == "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } = useForm(
    initialFormState
  );

  const onSuccess = () => {
    ButterToast.raise({
      content: (
        <Cinnamon.Crisp
          title="Post Box"
          content="Submitted successfully"
          scheme={Cinnamon.Crisp.SCHEME_PURPLE}
          icon={<AssignmentTurnedIn />}
        />
      ),
    });
    resetForm();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      if (props.currentId == 0) props.createPostMessage(values, onSuccess);
      else {
        let data = {
          title: values.title,
          message: values.message,
        };
        props.updatePostMessage(props.currentId, data, onSuccess);
      }
    }
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
        {...(errors.title && { error: true, helperText: errors.title })}
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
        {...(errors.message && { error: true, helperText: errors.message })}
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

const mapStateToProps = (state) => {
  return {
    postMessageList: state.PostMessage.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPostMessage: (values, onSuccess) => dispatch(create(values, onSuccess)),
    updatePostMessage: (currentId, values, onSuccess) =>
      dispatch(update(currentId, values, onSuccess)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PostMessageForm));
