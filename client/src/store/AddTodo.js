import { useState } from "react";

const AddTodo = ({ addItem }) => {
  const [todoItem, setTodoItem] = useState({ title: "" });
  console.log(todoItem);
  const onButtonClick = () => {
    if (todoItem.title.trim().length === 0) {
      return;
    }
    //props로 받아온 addItem 함수 실행
    addItem(todoItem); //{title: 'input 입력값'}
    setTodoItem({ title: "" }); //input 초기화
  };
  const onEnterKey = (e) => {
    if (e.key == "Enter") {
      onButtonClick();
    }
  };
  return (
    <div className="AddTodo">
      <input
        id="addbox"
        type="text"
        placeholder="어떤 일을 하면 좋을까요?"
        value={todoItem.title}
        onChange={(e) => setTodoItem({ title: e.target.value })}
        onKeyPress={onEnterKey}
        required
      />
      <button onClick={onButtonClick}>
        <span>ADD</span>
      </button>
    </div>
  );
};

export default AddTodo;
