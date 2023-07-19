import React from "react";

const Find = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.name} </h1>
      <h1>{props.age} </h1>
      <button onClick={props.onDataTrue2} >Vos</button>
      {/* <h1>h</h1> */}
    </div>
  );
};

export default Find;
