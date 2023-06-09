import React, { useEffect, useState } from "react";
import Calendar from "../../components/Calendar/Calendar";
import css from "./Mainpage.module.css";
import AddTodo from "../../store/AddTodo";
import Todo from "../../store/Todo";
import "../../components/Todo/TodoList.css";
import axios from "axios";
import moment from "moment";
import Memo from "../../components/Memo/Memo";
const Mainpage = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'));

useEffect(()=>{
  // 해당 날짜에 대한 todo 정보 불러오기
  const getTodoList = async () => {
    const response = await axios.get("http://localhost:8080/todos", {
      params: {
        date: selectedDate,
      }
    });
    setTodoItems(response.data);
  };
  getTodoList();
},[selectedDate]);

const handleDateSelect = (selectInfo) => {
  const newSelectedDate = moment(selectInfo.start).format('YYYY-MM-DD');
  setSelectedDate(newSelectedDate); // 선택한 날짜 정보 업데이트
};

    //todo 추가
    const addItem = async(newItem) =>{
      const response = await axios.post("http://localhost:8080/todo", {newItem});
      setTodoItems([...todoItems, response.data]);
    }
     //todo 수정
    const updateItem = async(targetItem) => {
      await axios.patch(`http://localhost:8080/todo/${targetItem.id}`, targetItem);
      const result = await axios.get("http://localhost:8080/todos", {
        params: {
          date : selectedDate,
        }
      });
      setTodoItems(result.data);
    };
  
    //todo 삭제
    const delItem = async(targetItem) => {
      await axios.delete(`http://localhost:8080/todo/${targetItem.id}`);
      const result = todoItems.filter((item) => item.id !== targetItem.id);
      setTodoItems(result);
    };
  return (
    <div className={css.container}>
      <div className={css.calendar}>
        <Calendar handleDateSelect={handleDateSelect} todoItems={todoItems} setTodoItems={setTodoItems}/>
      </div>
      <div className={css.todo}>
          <div className="todo-container">
      <div className="heading">
        <h2>To-Do List</h2>
      </div>
      <AddTodo addItem={addItem} selectedDate={selectedDate}/>
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
        <p>할 일이 없습니다.</p>  // ..There's nothing to do..
      )}
    </div>
      <Memo />
      </div>
    </div>
  );
};

export default Mainpage;
