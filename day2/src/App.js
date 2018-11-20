import React, { Component } from "react";
import "./App.css";
const GrandChild = props => {
  const { personData } = props;
  return <h3>{personData.grandChildName}</h3>;
};

const Child = props => {
  const { personData } = props;
  return (
    <div>
      <h2>{personData.childName}</h2>
      <GrandChild personData={personData} />
    </div>
  );
};
const Parent = props => {
  const { personData } = props;
  return (
    <div>
      <h1>Parent: {personData.parentName}</h1>
      <Child personData={personData} />
    </div>
  );
};

const App = () => {
  const personData = {
    parentName: "Gilbert",
    childName: "Regina",
    grandChildName: "Ryan"
  };

  return (
    <div>
      <Parent personData={personData} />
    </div>
  );
};
export default App;
