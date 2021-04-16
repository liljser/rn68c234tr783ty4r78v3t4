import React from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import TodosList from "./TodosList";
import TodosForm from "./TodosForm";
import { selectAll, addOne } from "./todoSlice";

export default function Todos() {
  console.log("--- Todos");
  const dispatch = useDispatch();
  const todos = useSelector(selectAll);

  return (
    <article>
      <h2>Todos:</h2>
      <TodosForm addTodo={(payload) => dispatch(addOne(payload))} />
      <TodosList todos={todos} />
    </article>
  );
}
