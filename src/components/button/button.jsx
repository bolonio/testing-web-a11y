import React from "react";

const Button = props => {
  return <button className={props.classes}>{props.text}</button>;
};

export default Button;
