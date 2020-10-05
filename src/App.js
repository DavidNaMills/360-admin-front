import React from "react";
import classes from "./App.module.scss";

const App = (): JSX.Element => {
  console.log("hello!");
  return (
    <div className={classes.hello}>
      <p> hello!</p>
    </div>
  );
};

export default App;
