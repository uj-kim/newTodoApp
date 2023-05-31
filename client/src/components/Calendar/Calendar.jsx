import React, { useEffect, useState } from "react";
import axios from "axios";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./Calendar.css";

const Calendar = (props) => {
  // todo를 event로 설정
  const [events, setEvents] = useState([props.todoItems, props.setTodoItems]);

//날짜에 todo 표시
useEffect(() => {
  const getTodoList = async () => {
    const response = await axios.get("http://localhost:8080/alltodos");
    const todos = response.data;
    const newEvents = todos.map((todo) => 
      {
        if(!todo.done){
          return{
            title: todo.title,
            start: todo.startdate,
            end: todo.enddate,
            done: todo.done,
          }
        }
        return null;
    }).filter(event => event !== null);
    setEvents(newEvents);
  }

  getTodoList();

}, [props.todoItems]);

  return (
    // 월간달력
    <div className="calendar-container">
      <div>
      <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next", //왼쪽 -> 이전달, 다음달
            center: "title", // 중앙 -> 이번달
            right: "today", // 오른쪽 -> 오늘날짜로 이동
          }}
          initialView="dayGridMonth"
          slotDuration={"01:00:00"}
          editable={false}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={true}
          nowIndicator={true}
          events={events}
          select={props.handleDateSelect}
        />
      </div>
    </div>
  );
};

export default Calendar;
