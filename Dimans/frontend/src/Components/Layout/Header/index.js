import Logo from "../../../assets/images/Dismans.svg";
import "../../../Styles/header.css";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

const Index = () => {

  return (
    <div className="fe-header">
      <div className="fe-header-title">
        <img src={Logo} />
        <h2>Dismans</h2>
      </div>
    </div>
  );
};

export default Index;
