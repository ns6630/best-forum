import React from "react";
import "./Header.css";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

export interface HeaderProps {
    children?: React.ReactNode;
}

export default function Header(props: HeaderProps) {
  return (
    <header>
      <div className="header-logo">
        <Link to="/">
        <img src={logo} alt="logo" />
        </Link>
      </div>
      {props.children}
    </header>
  );
}
