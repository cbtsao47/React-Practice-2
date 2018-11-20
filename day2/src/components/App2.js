import React from "react";
import ReactDOM from "react-dom";
const simpsonData = {
  name: "Orville Simpson",
  spouse: "Yuma Hickman",
  children: [
    {
      name: "Abraham Simpson",
      spouse: "Mona",
      children: [
        {
          name: "Homer Simpson",
          spouse: "Marge Bouvier",
          children: [
            {
              name: "Bart Simpson"
            },
            {
              name: "Lisa Simpson"
            },
            {
              name: "Maggie Simpson"
            }
          ]
        }
      ]
    }
  ]
};
const Parent = props => {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <p>Spouse: {props.spouse}</p>
      <p>children:{props.children[0].name}</p>
    </div>
  );
};
const App = () => {
  return (
    <React.Fragment>
      <Parent data={simpsonData} />
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
