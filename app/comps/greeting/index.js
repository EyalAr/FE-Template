import React from "react";

export default props => {
  return (
    <div style={{
      color: props.ready ? "blue" : "red"
    }}>
      {props.ready ? "Ready, hello" : "Please wait..."}
    </div>
  );
};
