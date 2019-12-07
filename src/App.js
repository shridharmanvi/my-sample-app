import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Displayposts from "./components/DisplayPosts.js";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello World</h1>
        <Displayposts />
      </div>
    </Provider>
  );
}

export default App;
