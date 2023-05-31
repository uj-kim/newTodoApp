import React, { useEffect, useState } from 'react';
import "./Memo.css";

const Memo = () => {
    const [memoText, setMemoText] = useState(localStorage.getItem('memo') || ''); //로컬스토리지에 memo 가져오기
    const handleMemoChange = (e) =>{
      setMemoText(e.target.value);
    };
    // 메모 전체 삭제
    const handleMemoClear = () => {
      localStorage.removeItem('memo');
      setMemoText("");
    };
    useEffect(()=>{
      function handleKeyUp() {
        localStorage.setItem('memo', memoText); // 로컬스토리지 memo에 텍스트 저장
      }
  
      document.addEventListener('keyup', handleKeyUp);
      return () => document.removeEventListener('keyup', handleKeyUp);
    }, [memoText])
  return (
    <div className="memo-container">
      <button className="memo-clear-button" onClick={handleMemoClear}>
        Clear
      </button>
      <textarea
        className="memo-textarea"
        value={memoText}
        onChange={handleMemoChange}
      />
      
    </div>
  )
}

export default Memo;