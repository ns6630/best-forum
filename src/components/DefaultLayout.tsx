import React from "react";
import "./DefaultLayout.css";

export interface DefaultLayoutProps {
    children?: React.ReactChild | React.ReactChild[]
}

export default function DefaultLayout(props: DefaultLayoutProps) {
    return (
        <div className="default-layout">
            <div className="default-layout__content">
                {props.children}
            </div>
        </div>
    )
}