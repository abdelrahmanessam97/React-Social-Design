import {
  DarkModeOutlined,
  EmailOutlined,
  GridViewOutlined,
  HomeOutlined,
  NotificationsOutlined,
  PersonOutlined,
  SearchOutlined,
  WbSunnyRounded,
} from "@mui/icons-material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../Context/darkModeContext";
import "./NavBar.scss";

export default function NavBar() {
  const { toggleDarkMode, darkMode } = useContext(DarkModeContext);

  return (
    <>
      <div className="navbar">
        <div className="left">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span>ReactSocial</span>
          </Link>
          <HomeOutlined />
          {darkMode ? (
            <WbSunnyRounded
              sx={{ cursor: "pointer" }}
              onClick={toggleDarkMode}
            />
          ) : (
            <DarkModeOutlined
              sx={{ cursor: "pointer" }}
              onClick={toggleDarkMode}
            />
          )}
          <GridViewOutlined />
          <div className="search">
            <SearchOutlined />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="right">
          <PersonOutlined />
          <EmailOutlined />
          <NotificationsOutlined />
          <div className="user">
            <img
              src={
                "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
              }
              alt=""
            />
            <span>AB</span>
          </div>
        </div>
      </div>
    </>
  );
}
