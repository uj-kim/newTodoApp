import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import "./Calendar.css";
import useCalendar from "../../store/Calendar";

const Calendar = (props) => {
  const [events, setEvents] = useState([props.todoItems, props.setTodoItems]);

//todo 있는 날짜 표시
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
    <div className="calendar-container">
      <div>
      <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next",
            center: "title",
            right: "today",
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
