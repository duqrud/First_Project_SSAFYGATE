import React from "react";

const Customer = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.id}</p>
      <p>{props.birthday}</p>
    </div>
  );
};
export default Customer;
