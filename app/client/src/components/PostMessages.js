import React, { useEffect, Fragment, useState } from "react";
import { connect } from "react-redux";
import { fetchPosts, deletePost } from "../redux/index";
import {
  Grid,
  List,
  ListItemText,
  Paper,
  Typography,
  withStyles,
  ListItem,
  Divider,
  Button,
} from "@material-ui/core";
import PostMessageForm from "./PostMessageForm";
import ButterToast, { Cinnamon } from "butter-toast";
import { DeleteSweep } from "@material-ui/icons";

const styles = (theme) => ({
  paper: {
    margin: theme.spacing(3),
    padding: theme.spacing(2),
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: "center",
  },
});

const PostMessages = ({ classes, ...props }) => {
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    props.initGetPosts();
  }, []);

  const onDelete = (id) => {
    const onSuccess = () => {
      ButterToast.raise({
        content: (
          <Cinnamon.Crisp
            title="Post Box"
            content="Deleted successfully"
            scheme={Cinnamon.Crisp.SCHEME_PURPLE}
            icon={<DeleteSweep />}
          />
        ),
      });
    };
    if (window.confirm("Are you sure to delete this record?")) props.deletePost(id, onSuccess);
  };

  return (
    <Grid container>
      <Grid item xs={12} md={5}>
        <Paper className={classes.paper}>
          <PostMessageForm {...{ currentId, setCurrentId }} />
        </Paper>
      </Grid>
      <Grid item xs={12} md={7}>
        <Paper className={classes.paper}>
          <List>
            {props.data && props.data.length === 0 && (
              <Typography variant="body1" gutterBottom>
                No Records Found
              </Typography>
            )}
            {props.data &&
              props.data.map((item, index) => {
                return (
                  <Fragment key={index}>
                    <ListItem>
                      <ListItemText>
                        <Typography variant="h5">{item.title}</Typography>
                        <div>{item.message}</div>
                        <div className={classes.actionDiv}>
                          <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            className={classes.smMargin}
                            onClick={() => setCurrentId(item._id)}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="contained"
                            color="secondary"
                            size="small"
                            className={classes.smMargin}
                            onClick={() => onDelete(item._id)}
                          >
                            Delete
                          </Button>
                        </div>
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
    deletePost: (id, onSuccess) => dispatch(deletePost(id, onSuccess)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PostMessages));
