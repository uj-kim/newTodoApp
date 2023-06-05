import React from 'react'
import css from "./NotFound.module.css";
const NotFound = () => {
  return (
    <div className={css.container}>
        <h3>
        잘못된 접근입니다. 
        <br />올바른 페이지로 이동해주세요.
        <br />
        <div className={css.link}>
        👉 <a href='/'>이동하기</a> 👈
        </div>
        </h3>
    </div>
  )
}

export default NotFound;