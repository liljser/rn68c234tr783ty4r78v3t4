import React from "react";

export default function Todo({ title }) {
  return (
    <p>
      {title}
      <span className="sign-todo">{` todo`}</span>
    </p>
  );
}
