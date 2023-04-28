import React, { useEffect, useRef, useState } from "react";
import Calendar from "../../components/Calendar/Calendar";
import css from "./Mainpage.module.css";
import TodoList from "../../components/Todo/TodoList";
const Mainpage = () => {
  return (
    <div className={css.container}>
      <div className={css.calendar}>
        <Calendar />
      </div>
      <div className={css.todo}>
        <TodoList />
      </div>
    </div>
  );
};

export default Mainpage;
