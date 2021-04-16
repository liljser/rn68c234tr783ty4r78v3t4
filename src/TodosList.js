import React from "react";
import TodoItem from "./TodoItem";

export default function TodosList({ todos = [] }) {
  let body = todos.map(({ id, title }) => <TodoItem key={id} title={title} />);

  return <ul>{body}</ul>;
}
