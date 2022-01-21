import logo from "./1.jpg";
import "./App.css";
import "./App.scss";
import { React, useState } from "react";

import SvgIcon from "@mui/material/SvgIcon";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import WifiIcon from "@mui/icons-material/Wifi";
import Battery90Icon from "@mui/icons-material/Battery90";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import MapIcon from "@mui/icons-material/Map";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { getListItemSecondaryActionClassesUtilityClass } from "@mui/material";

function App() {
  let dt = new Date();
  //hook 사용하기 집가서
  let [time, timeChange] = useState(dt.getHours() + ":" + dt.getMinutes());

  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

  return (
    <div className="App">
      <div className="main-container">
        <div className="contents-container">
          <Navbar time={time} />
          <Top />
          <Middle />
        </div>
        <Footer HomeIcon={HomeIcon} />
      </div>
    </div>
  );
}

function Navbar(props) {
  return (
    <div className="Nav">
      <div className="time-box">
        <span className="times"> {props.time}</span>
      </div>
      <div className="utility-box">
        <SignalCellularAltIcon className="icons" />
        <WifiIcon className="icons" />
        <Battery90Icon className="battery" className="icons" />
      </div>
    </div>
  );
}

function Top() {
  return (
    <div className="top-container">
      <div className="weather">
        <p className="sunny">Sunny</p>
        <p className="sunny">Day</p>
        <p className="sunny">Walk</p>
      </div>
      <div className="map-box">
        <MapIcon className="map" />
        <StarOutlineIcon className="favorite" />
      </div>
    </div>
  );
}

function Middle() {
  return (
    <div className="sun-box">
      <img src={logo} alt="" />
    </div>
  );
}

function Footer(props) {
  return (
    <div className="footer-container">
      <div className="back-box box3">
        <ArrowCircleLeftRoundedIcon className="goback" />
      </div>
      <div className="home-box box3">
        <props.HomeIcon className="home" color="action" sx={{ fontSize: 60 }} />
      </div>
      <div className="setting-box box3">
        <AddCircleRoundedIcon className="plus" />
      </div>
    </div>
  );
}
export default App;
