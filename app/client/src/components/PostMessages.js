import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../redux/index";
import { Grid, List, ListItemText, Paper, Typography, withStyles } from "@material-ui/core";
import PostMessageForm from "./PostMessageForm";

const styles = (theme) => ({
  paper: {
    margin: theme.spacing(3),
    padding: theme.spacing(2),
  },
});

const PostMessages = ({ classes, ...props }) => {
  useEffect(() => {
    props.initGetPosts();
  }, []);
  return (
    <Grid container>
      <Grid item xs={5}>
        <Paper className={classes.paper}>
          <PostMessageForm />
        </Paper>
      </Grid>
      <Grid item xs={7}>
        <Paper className={classes.paper}>
          <List>
            {props.data && props.data.length === 0 && (
              <Typography variant="body1" gutterBottom>
                No Records Found
              </Typography>
            )}
            {props.data &&
              props.data.length > 0 &&
              props.data.map((item, index) => {
                return (
                  <Fragment key={index}>
                    <ListItem>
                      <ListItemText>
                        <Typography variant="h5" >{item.title}</Typography>
                      </ListItemText>
                    </ListItem>
                    <Divider component="li" />
                  </Fragment>
                );
              })}
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.PostMessage.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initGetPosts: () => dispatch(fetchPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PostMessages));
