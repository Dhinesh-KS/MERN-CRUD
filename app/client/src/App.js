import React from "react";
import PostMessage from "./components/PostMessages";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PostMessage />
      </Provider>
    </div>
  );
}

export default App;
