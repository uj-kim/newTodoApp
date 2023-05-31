import moment from "moment/moment";
import "moment/locale/ko";
import { Outlet, useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import css from "./Layout.module.css";
import Bookmark from "../Bookmark/Bookmark";
import Weather from "../Weather/Weather";

const Layout = () => {
  const { pathname } = useLocation();
  return (
    <div className={css.container}>
      {pathname === "/" && <Navigate to="/main" />}
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
              <Weather />
            </div>
          </div>
          {/* 바로가기  기능*/}
          <div className={css.bookmarks}>
            <Bookmark />
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
