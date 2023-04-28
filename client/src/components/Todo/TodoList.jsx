import React, { useRef, useState } from "react";
import AddTodo from "../../store/AddTodo";
import Todo from "../../store/Todo";
import "./TodoList.css";

const TodoList = () => {
  const [todoItems, setTodoItems] = useState([]);
  const todoId = useRef(4);

  //todo 추가
  const addItem = (newItem) => {
    newItem.id = todoId.current++;
    newItem.done = false;
    setTodoItems([...todoItems, newItem]);
  };
  //todo 수정
  const updateItem = (targetItem) => {
    console.log(targetItem);
  };

  //todo 삭제
  const delItem = (targetItem) => {
    const result = todoItems.filter((item) => item.id !== targetItem.id);
    setTodoItems(result);
  };
  return (
    <div className="todo-container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <label htmlFor="todo">~오늘 해야 할 일 ~</label>
      <AddTodo addItem={addItem} />
      <div className="written-todos">🚀 {todoItems.length} Todos</div>
      {todoItems.length > 0 ? (
        todoItems.map((item) => {
          return (
            <Todo
              key={item.id}
              item={item}
              updateItem={updateItem}
              delItem={delItem}
            />
          );
        })
      ) : (
        <p>할 일이 없습니다.</p>
      )}
    </div>
  );
};

export default TodoList;
