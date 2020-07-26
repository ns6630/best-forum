import React from "react";
import "./Footer.css";

export interface FooterProps {
    children?: React.ReactChild | React.ReactChild[]
}

export default function Footer(props: FooterProps) {
    return (
        <footer>
            {props.children}
        </footer>
    )
}