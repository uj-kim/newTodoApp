import React, { useEffect, useRef, useState } from "react";
import Calendar from "../../components/Calendar/Calendar";
import css from "./Mainpage.module.css";
// import TodoList from "../../components/Todo/TodoList";
import AddTodo from "../../store/AddTodo";
import Todo from "../../store/Todo";
import "../../components/Todo/TodoList.css";
import axios from "axios";
import moment from "moment";
const Mainpage = () => {
  const [todoItems, setTodoItems] = useState([]);
  const todoId = useRef(4);
  const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'));
/*
  const handleDateSelect = async (selectInfo) => {
    // let title = prompt("Please enter a title for the event");
    console.log(selectInfo);
    console.log(selectInfo.start);
    // const selectedDate = moment(selectInfo.start).format('YYYY-MM-DD');
    await axios.get("http://localhost:8080/todos", {
      params: {
        date: selectedDate,
      }
    }).then((response)=>{
      setTodoItems(response.data);
      console.log(response.data);
    })

  };
*/

useEffect(()=>{
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
    // const addItem = async(selectInfo) => {
      // newItem.id = todoId.current++;
      // newItem.done = false;
      // const response = await axios.post("http://localhost:8080/todo", newItem);
      // setTodoItems([...todoItems, response.data]);
      // console.log(selectInfo);
    // };
    //todo 수정
    const updateItem = async(targetItem) => {
      console.log(targetItem);
      await axios.patch(`http://localhost:8080/todo/${targetItem.id}`, targetItem);
    };
  
    //todo 삭제
    const delItem = (targetItem) => {
      const result = todoItems.filter((item) => item.id !== targetItem.id);
      setTodoItems(result);
    };
  return (
    <div className={css.container}>
      <div className={css.calendar}>
        <Calendar handleDateSelect={handleDateSelect}/>
      </div>
      <div className={css.todo}>
        {/* <TodoList todoItems={todoItems} setTodoItems={setTodoItems} />
         */}
          <div className="todo-container">
      <div className="heading">
        <h2>To-Do List</h2>
      </div>
      {/* <label htmlFor="todo">~오늘 해야 할 일 ~</label> */}
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
        <p>할 일이 없습니다.</p>
      )}
    </div>
      </div>
    </div>
  );
};

export default Mainpage;
