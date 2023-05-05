import React, { useEffect, useState } from 'react';
import "./Memo.css";

const Memo = () => {
    const [memoText, setMemoText] = useState(localStorage.getItem('memo') || '');
    const handleMemoChange = (e) =>{
      setMemoText(e.target.value);
    };
    const handleMemoClear = () => {
      localStorage.removeItem('memo');
      setMemoText("");
    };
    useEffect(()=>{
      function handleKeyUp() {
        localStorage.setItem('memo', memoText);
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