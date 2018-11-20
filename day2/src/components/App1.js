import React from "react";
import ReactDOM from "react-dom";

const Book = props => {
  return <p>My favorite book is: {props.favoriteBook}</p>;
};

const BestFriend = props => {
  return (
    <div>
      <h4>My best friend in this world is: {props.bestFriend}</h4>
      <Book favoriteBook={props.favoriteBook} />
    </div>
  );
};

const App = props => {
  return (
    <div>
      <h2>Hello world from, {props.name}</h2>
      <BestFriend bestFriend="Homer" favoriteBook="October Sky" />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
