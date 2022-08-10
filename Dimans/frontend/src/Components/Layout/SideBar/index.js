import "../../../Styles/sidebar.css";
import Logo from "../../../assets/images/Dismans.svg";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import DeleteSweepRoundedIcon from "@mui/icons-material/DeleteSweepRounded";
import SellRoundedIcon from "@mui/icons-material/SellRounded";
import AssessmentRoundedIcon from "@mui/icons-material/AssessmentRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { useState } from "react";
import { Redirect } from 'react-router-dom';
import { Login } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';


const Index = () => {
  // const auth = useSelector(state => state.auth);
  //   if(auth.authenticate){
  //       return <Redirect to={`/`}/>
  //   }

  // const logout = () => {

  // }
  const token = localStorage.getItem("token");
  const navigate = useNavigate();


  const [hiddenState, setState] = useState(false);
  const Hide = () => {
    if (hiddenState) {
      setState(false);
    } else {
      setState(true);
    }
  };

  // make a logout method
  const Logout = async (e) => {
    localStorage.clear();
    window.location.reload();
  }
  // make a login method
  const Login = async (e) => {
    navigate("/login");
  };

  return (
    <>
      <div className="fe-sidebar">
        <div className="fe-sidebar-top">
          <button onClick={Hide}>
            {/* <MenuRoundedIcon fontSize="large" className="fe-sidebar-icons" /> */}
            {/* <div className="fe-header"> */}
            <div className="fe-header-title">
              <img src={Logo} />
              {/* </div> */}
            </div>
          </button>
        </div>
        <div className="fe-sidebar-links">
          <ul>
            <li>
              <div>
                <Link to="/home" className="fe-sidebar-routing-link">
                  <HomeRoundedIcon
                    fontSize="large"
                    className="fe-sidebar-icons"
                  />
                  <p className={hiddenState ? "fe-sidebar-hide" : ""}>Home</p>
                </Link>
              </div>
            </li>
            <li>
              <Link to="/items" className="fe-sidebar-routing-link">
                <Inventory2RoundedIcon
                  fontSize="large"
                  className="fe-sidebar-icons"
                />
                <p className={hiddenState ? "fe-sidebar-hide" : ""}>
                  Manage Items
                </p>
              </Link>
            </li>
            <li>
              <Link to="/scrap" className="fe-sidebar-routing-link">
                <DeleteSweepRoundedIcon
                  fontSize="large"
                  className="fe-sidebar-icons"
                />
                <p className={hiddenState ? "fe-sidebar-hide" : ""}>Scrap</p>
              </Link>
            </li>
            <li>
              <Link to="/resell" className="fe-sidebar-routing-link">
                <SellRoundedIcon
                  fontSize="large"
                  className="fe-sidebar-icons"
                />
                <p className={hiddenState ? "fe-sidebar-hide" : ""}>Resell</p>
              </Link>
            </li>
            <li>
              <Link to="/reports" className="fe-sidebar-routing-link">
                <AssessmentRoundedIcon
                  fontSize="large"
                  className="fe-sidebar-icons"
                />
                <p className={hiddenState ? "fe-sidebar-hide" : ""}>Report</p>
              </Link>
            </li>
            {
              token ?
                <li>
                  <Link className="fe-sidebar-routing-link" onClick={Logout}>
                    <LogoutRoundedIcon
                      fontSize="large"
                      className="fe-sidebar-icons"
                    />
                    <p className={hiddenState ? "fe-sidebar-hide" : ""} >Logout</p>
                  </Link>
                </li>
                :
                <li>
                  <Link className="fe-sidebar-routing-link" onClick={Login}>
                    <LogoutRoundedIcon
                      fontSize="large"
                      className="fe-sidebar-icons"
                    />
                    <p className={hiddenState ? "fe-sidebar-hide" : ""} >Login</p>
                  </Link>
                </li>
            }
            {/* <hr /> */}
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Index;
