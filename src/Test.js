import React from "react";

const Test = (props) => {
  //  console.log(props);
  const filterTest = () => {
    // console.log(props.id);
    props.onSave(props.id);
  };

  return (
    <div>
      <h2>{props.name} </h2>
      <h2>{props.age} </h2>
      <button onClick={filterTest}>delete</button>
    </div>
  );
};

export default Test;
