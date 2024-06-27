import {
  EmailOutlined,
  FacebookTwoTone,
  Instagram,
  Language,
  LinkedIn,
  MoreVert,
  Pinterest,
  Place,
  Twitter,
} from "@mui/icons-material";
import Posts from "../../Components/Posts/Posts";
import "./Profile.scss";

export default function Profile() {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoTone />
            </a>
            <a href="http://facebook.com">
              <Instagram />
            </a>
            <a href="http://facebook.com">
              <Twitter />
            </a>
            <a href="http://facebook.com">
              <LinkedIn />
            </a>
            <a href="http://facebook.com">
              <Pinterest />
            </a>
          </div>
          <div className="center">
            <span>AB</span>
            <div className="info">
              <div className="item">
                <Place />
                <span>EYG</span>
              </div>
              <div className="item">
                <Language />
                <span>AR</span>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <EmailOutlined />
            <MoreVert />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
}
