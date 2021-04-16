import React from "react";

export default function TodosForm({ addTodo }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const { target: form } = event;
    const { elements } = form;
    const { value } = elements["new-todo"];
    addTodo({ id: new Date().getTime(), title: value });
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="new todo" name="new-todo" />
    </form>
  );
}
