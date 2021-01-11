import React from "react";
import PostMessage from "./components/PostMessages";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { AppBar, Container, Typography } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Container maxWidth="lg">
          <AppBar position="static" color="primary">
            <Typography variant="h3" align="center">
              MERN-CRUD
            </Typography>
          </AppBar>
          <PostMessage />
        </Container>
      </Provider>
    </div>
  );
}

export default App;
