import React, { useEffect, useState } from 'react';
import {IoAddCircleSharp} from "react-icons/io5";
import "./Bookmark.css";
const Bookmark = () => {
    const [bookmarks, setBookmarks] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);
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

  // 바로가기 추가
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

  
    // 바로가기 수정
    const UpdateBookmark = (e) => {
      e.preventDefault();
      if (!name.trim() && !url.trim()) {
        alert('수정사항이 없습니다.');
        setShowModal2(false);
        return;
      }else if(!name.trim() || !url.trim()){
        alert('이름과 주소 모두 입력해주세요.')
        return;
      }
      const newBookmarks = [...bookmarks];
      newBookmarks[selectedIndex] = { name, url };
      setBookmarks(newBookmarks);
      setShowModal2(false);
    };
    //바로가기 삭제
    const DeleteBookmark = (e) => {
      e.preventDefault();
      const newBookmarks = bookmarks.filter((bookmark, index) => index !== selectedIndex);
      setBookmarks(newBookmarks);
      setShowModal2(false);
    };
    //바로가기 추가 제한
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
        {bookmarks.map((bookmark, index) => (
          <li key={bookmark.url}>
            <button><a href={bookmark.url}>{bookmark.name}</a></button>
            <button onClick={() => { setShowModal2(true); setSelectedIndex(index); }}>수정/삭제</button>
          </li>
        ))}
      </ul>
      {/* 바로가기 수정/삭제 모달 대화상자 */}
      {showModal2 && (
  <div className='modal-container'>
    <h3>바로가기 수정/삭제</h3>
    <label>바로가기 이름</label>
    <input placeholder={bookmarks[selectedIndex].name} value={name} onChange={e => setName(e.target.value)} autoFocus/>
    <label>바로가기 주소</label>
    <input placeholder={bookmarks[selectedIndex].url} value={url} onChange={e => setUrl(e.target.value)}/>
    <div className="button-container">
      <button onClick={UpdateBookmark}>
        <span>수정</span></button>
      <button onClick={DeleteBookmark}>
        <span>삭제</span></button>
      <button onClick={()=>{setShowModal2(false)}}>
        <span>취소</span></button>
    </div>
  </div>
)}
{/* 바로가기 추가 모달 대화상자 */}
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
      {/* 모달창 외 영역 배경 어둡게 */}
      {showModal&&<div className='modal-backdrop'></div>}
    </div>
  )
}

export default Bookmark