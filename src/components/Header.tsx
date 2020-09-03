import React from "react";
import "./Header.css";
import logo from "../img/logo.png";

export interface HeaderProps {
    children?: React.ReactNode;
}

export default function Header(props: HeaderProps) {
  return (
    <header>
      <div className="header-logo">
        <img src={logo} alt="logo" />
      </div>
      {props.children}
    </header>
  );
}
