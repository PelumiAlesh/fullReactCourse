import React from "react";
import "./styles.scss";
import Logo from "../../assets/LOGO.gif";

const Header = props => {
  return (
    <header data-test="HeaderComponent">
      <div className="wrap">
        <div className="logo">
          <img data-test="LogoImg" src={Logo} alt="Logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
