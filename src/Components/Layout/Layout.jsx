import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { DarkModeContext } from "../../Context/darkModeContext";
import LeftBar from "../LeftBar/LeftBar";
import NavBar from "../Navbar/NavBar";
import RightBar from "../RightBar/RightBar";

export default function Layout() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
      <NavBar />
      <main style={{ display: "flex" }}>
        <div>
          <LeftBar />
        </div>

        <div style={{ flex: 6 }}>
          <Outlet />
        </div>

        <div>
          <RightBar />
        </div>
      </main>
    </div>
  );
}
