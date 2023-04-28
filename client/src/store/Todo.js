import React, { useState } from "react";

const Todo = ({ item, updateItem, delItem }) => {
  const { id, title, done } = item;
  const [todoItem, setTodoItem] = useState(item);
  const [isreadOnly, setReadOnly] = useState(true);

  //todoItem 수정
  const editEventHandler = (e) => {
    //rest: id, done 정보
    const { title, ...rest } = todoItem;
    setTodoItem({
      title: e.target.value,
      ...rest,
    });
  };

  //checkbox 업데이트
  const checkboxEventHandler = (e) => {
    // rest: id, title 정보
    const { done, ...rest } = todoItem; // { id: 1, title: 'todo1', done: false, }
    const updatedItem = {
      done: e.target.checked,
      ...rest,
    };
    setTodoItem(updatedItem);
    updateItem(updatedItem);
  };
  const offReadOnlyMode = () => {
    setReadOnly(false);
  };
  const onEnterKey = (e) => {
    if (e.key == "Enter") {
      console.log(item);
      setReadOnly(true);
      updateItem(todoItem);
    }
  };
  //todoItem삭제
  const delClick = () => {
    delItem(todoItem);
  };
  return (
    <div className="Todo">
      <label className={`${done ? "checked" : ""} checkboxCard`}>
        <input
          type="checkbox"
          id={`todo${id}`}
          className="checkbox"
          name={`todo${id}`}
          value={`todo${id}`}
          defaultChecked={done}
          onChange={checkboxEventHandler}
        />
        <input
          id="todobox"
          type="text"
          value={todoItem.title}
          onChange={editEventHandler}
          onKeyPress={onEnterKey}
          readOnly={isreadOnly}
          onFocus={offReadOnlyMode}
          onBlur={() => setReadOnly(true)}
        />
        <button onClick={delClick}>
          <span>삭제하기</span>
        </button>
      </label>
    </div>
  );
};

export default Todo;
