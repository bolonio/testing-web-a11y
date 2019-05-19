import React from "react";

const FakeButton = props => {
  return (
    <a href={props.href} className={props.classes} role="button">
      {props.text}
    </a>
  );
};

export default FakeButton;
