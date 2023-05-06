import React, { useEffect, useState } from 'react';
import {IoAddCircleSharp} from "react-icons/io5";
import "./Bookmark.css";
const Bookmark = () => {
    const [bookmarks, setBookmarks] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");

// 로컬 스토리지에서 바로가기 목록을 불러오기
useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    setBookmarks(storedBookmarks);
  }, []);

  // 바로가기 목록이 업데이트될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

    const AddBookmark = (e) => {
      e.preventDefault();
      if (!name.trim() || !url.trim()) {
        alert('이름과 주소를 모두 입력해주세요.');
        return;
      }
        const bookmark = { name, url };
        setBookmarks([...bookmarks, bookmark]);
        setShowModal(false);
      };
    const handleAddButton = ()=>{
      if (bookmarks.length >= 5) {
        setShowModal(false);
        alert('최대 5개까지만 등록할 수 있습니다.');
        return;
      }else{
        setShowModal(true);
      }
    }
  return (
    <div className='bookmark-container'>
      <button onClick={handleAddButton}>
      <IoAddCircleSharp size={40}/>
      <p>바로가기 추가</p>
      </button>
      <ul>
        {bookmarks.map(bookmark => (
          <li key={bookmark.url}>
            <button><a href={bookmark.url}>{bookmark.name}</a></button>
          </li>
        ))}
      </ul>
      {showModal && (
        <div className='modal-container'>
            <h3>바로가기 추가</h3>
            <label>바로가기 이름</label>
          <input value={name} onChange={e => setName(e.target.value)} autoFocus/>
          <label>바로가기 주소</label>
          <input value={url} onChange={e => setUrl(e.target.value)}/>
          <div className="button-container">
          <button onClick={AddBookmark}>
            <span>완료</span></button>
          <button onClick={()=>{setShowModal(false)}}>
            <span>취소</span></button>
            </div>
        </div>
      )}
      {showModal&&<div className='modal-backdrop'></div>}
    </div>
  )
}

export default Bookmark