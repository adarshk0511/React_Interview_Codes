import { useState } from "react";

const Todo = () => {
  const [input, setInput] = useState();
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      text: "Todo1",
      completed: true,
    },
    {
      id: 2,
      text: "Todo2",
      completed: false,
    },
  ]);

  const addTodoItem = () => {
    if (input.trim() === "") return;

    const item = {
      id: todoList.length + 1,
      text: input.trim(),
      completed: false,
    };

    setTodoList((prev) => [...prev, item]);
    setInput("");
  };

  const toggleCompleted = (id) => {
    setTodoList(
      todoList.map((t) => {
        if (t.id === id) {
          return {
            ...t,
            completed: !t.completed,
          };
        } else {
          return t;
        }
      })
    );
  };

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((t) => t.id !== id));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addTodoItem()}>Add</button>

      <ol>
        {todoList.map((t) => (
          <li key={t.id}>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => toggleCompleted(t.id)}
            />
            <span className={t.completed ? "strike-through" : ""}>
              {t.text}
            </span>
            <button onClick={() => deleteTodo(t.id)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Todo;
