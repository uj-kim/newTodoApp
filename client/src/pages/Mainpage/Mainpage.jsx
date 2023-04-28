import React from "react";
import Calendar from "../../components/Calendar/Calendar";
import Todo from "../../components/Todo/Todo";

const Mainpage = () => {
  return (
    <div>
      <Calendar style={{ flex: 1 }} />
      <Todo style={{ flex: 1 }} />
    </div>
  );
};

export default Mainpage;
