import React from "react";
import axios from "axios";
import moment from "moment";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import "./Calendar.css";
import useCalendar from "../../store/Calendar";

const Calendar = (props) => {
  const { currentEvents, setCurrentEvents } = useCalendar();

  //   calendar Events
  let eventGuid = 0;
  //   let todayStr = moment().format("YYYY-MM-DD");

  function createEventId() {
    return String(eventGuid++);
  }

  const handleEvents = async (events) => {
    await Promise.resolve(setCurrentEvents(events));
  };
/*
  const handleDateSelect = async (selectInfo) => {
    // let title = prompt("Please enter a title for the event");
    let calendarApi = selectInfo.view.calendar;

    // calendarApi.unselect();
    console.log(calendarApi);
    // if (title) {
    //   calendarApi.addEvent({
    //     id: createEventId(),
    //     title,
    //     start: selectInfo.start,
    //     end: selectInfo.end,
    //     allDay: selectInfo.allDay,
    //   });
    // }
    console.log(selectInfo);
    console.log(selectInfo.start);
    const selectedDate = moment(selectInfo.start).format('YYYY-MM-DD');
    await axios.get("http://localhost:8080/todos", {
      params: {
        date: selectedDate,
      }
    }).then((response)=>{
      console.log(response.data);
    })
  };
*/
  const handleEventDelete = (clickInfo) => {
    if (window.confirm("Are you sure?")) {
      clickInfo.event.remove();
    }
  };
  return (
    <div className="calendar-container">
      <div>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          allDaySlot={false}
          initialView="timeGridWeek"
          slotDuration={"01:00:00"}
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={true}
          nowIndicator={true}
          initialEvents={currentEvents}
          eventsSet={handleEvents}
          select={props.handleDateSelect}
          // eventClick={handleEventDelete}
        />
      </div>
    </div>
  );
};

export default Calendar;
