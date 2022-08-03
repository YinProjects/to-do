import React from "react";

const AddTodo = (props) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    // const task = evt.target.task.value
    // const priority = evt.target.priority.value
    // dispatch(addTask({task, priority}))
  };

  return (
    <div>
      <h3>Add Task</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="task">
            <small>Task</small>
          </label>
          <input name="task" type="text" />
        </div>
        <div>
          <label htmlFor="priority">
            <small>Priority</small>
          </label>
          <select id="priority" name="priority">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div>
          <button type="submit">Add Task</button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
