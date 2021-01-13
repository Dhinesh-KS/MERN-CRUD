import React from "react";
import PostMessage from "./components/PostMessages";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { AppBar, Container, Typography } from "@material-ui/core";
import ButterToast,{ POS_RIGHT,POS_TOP } from "butter-toast";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Container maxWidth="lg">
          <AppBar position="static" color="primary">
            <Typography variant="h3" align="center">
              Post-Box
            </Typography>
          </AppBar>
          <PostMessage />
          <ButterToast position={{vertical:POS_TOP,horizontal:POS_RIGHT}}/>
        </Container>
      </Provider>
    </div>
  );
}

export default App;
