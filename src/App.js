import "./App.css";
import { Greeting, Header } from "./components";
import React from "react";
import { print } from "./utils";

const App = () => {
  print("Hello");

  return (
    <div className="container">
      <Header />
      <Greeting name="🙏" />
    </div>
  );
};

export default App;
