import { fetchVideosRequest } from "../../redux/channelDetails/channelSlice";
import { useEffect, useState } from "react";
import "./Header.scss";
import Logo from "@/assets/images/YouTube_logo_(2017).png";
import { FiMenu } from "react-icons/fi";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import micIcon from "@/assets/images/74ce14befb22695743659cf8a8290c2b.png";
import { AiOutlineMore } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";

export const Header = ({ isActive, setIsActive }) => {
  const [search, setSearch] = useState("");
  const { videos, loading, error } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    if (search || search.trim) {
      dispatch(fetchVideosRequest(search));

      navigate(`/results?search_query=${encodeURIComponent(search)}`);
    }
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter" && (search || search.trim)) {
      handleSearch();
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="header">
      {/* Logo  */}
      <div className="logo">
        <div className="baqueIcon_wrap" onClick={() => setIsActive(!isActive)}>
          <FiMenu className="baqueIcon" />
        </div>
        <img
          onClick={() => {
            navigate("/");
          }}
          className="logoImage"
          src={Logo}
          alt="Logo"
        />
      </div>
      {/* ------------------------------ */}

      {/* searchBar */}
      <div className="search_wrap">
        <div className="searchBar_wrap">
          <input
            type="text"
            placeholder="Search"
            onChange={handleChange}
            onKeyPress={handleEnterPress}
            value={search}
          />
          <div onClick={handleSearch} className="icon_wrap_1_wrap">
            <button className="icon_wrap_1" id="iconWrap1">
              <PiMagnifyingGlassLight className="icon_kinhLup_1" />
            </button>
            <div className="icon1_tooltip" id="iconTooltip">
              <p>Search</p>
            </div>
          </div>
          <div type="submit" className="icon_wrap_2">
            {/* <PiMagnifyingGlassLight className="icon_kinhLup_2" /> */}
          </div>
        </div>
        <div className="micIcon_wrap">
          <img src={micIcon} className="micIcon" />
          <div className="searchWithYourVoice">
            <p>Search with your voice</p>
          </div>
        </div>
      </div>
      {/* ------------------------------ */}

      {/* account */}
      <div className="account">
        <div className="setting_wrap">
          <AiOutlineMore className="setting" />
          <div className="settings">
            <p>Settings</p>
          </div>
        </div>
        <div className="signIn_wrap">
          <div className="signIn_icon_wrap">
            <HiOutlineUserCircle className="signIn_icon" />
          </div>
          <p>Sign in</p>
        </div>
      </div>
      {/* ------------------------------ */}
    </div>
  );
};
