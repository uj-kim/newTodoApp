import { useState } from "react";

const AddTodo = (props) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue !== '') {
      const newItem = {
        date: props.selectedDate, // 선택한 날짜 정보
        title: inputValue, // 입력한 todo 내용
      };
      props.addItem(newItem);
      setInputValue('');
    }
  };
  const onEnterKey = (e) => {
    if (e.key == "Enter") {
      handleSubmit();
    }
  };
  return (
    <div className="AddTodo">
       <form onSubmit={handleSubmit}>
      <input
        id="addbox"
        type="text"
        placeholder="어떤 일을 하면 좋을까요?"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={onEnterKey}
        required
      />
      {/* <button onClick={onButtonClick}> */}
      <button type="submit">
        <span>ADD</span>
      </button>
      </form>
    </div>
  );
};

export default AddTodo;
