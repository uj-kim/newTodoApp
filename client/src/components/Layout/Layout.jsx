import moment from "moment/moment";
import "moment/locale/ko";
import { Outlet, useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import css from "./Layout.module.css";
import { BiSearch } from "react-icons/bi";

const Layout = () => {
  const { pathname } = useLocation();
  return (
    <div className={css.container}>
      <div className={css.dashboard}>
        <div className={css.topBaseGradients}>
          <div className="circle small"></div>
          <div className="circle medium"></div>
          <div className="circle big"></div>
        </div>

        <div className={css.header}>
          {/* 프로필 */}
          <div className={css.profile}>
            <div className={css.details}>
              <span>안녕하세요,</span>
              <span>한순영님!</span>
            </div>
          </div>
          {/* 검색창(검색기능) */}
          <div className={css.searchBar}>
            <BiSearch size={20} />
            <input type="text" placeholder="Search" />
          </div>
          {/* 날짜 */}
          <span>{moment().format("YYYY년 MMM Do, dddd")}</span>
        </div>
        {/* 헤더 바깥에 콘텐츠 */}
        <div className={css.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
