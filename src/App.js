import React from "react";
import TwitterModule from "./components/TwitterModule";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1 className="App__title">Green Twitter Timeline</h1>
      <TwitterModule />
    </div>
  );
}
