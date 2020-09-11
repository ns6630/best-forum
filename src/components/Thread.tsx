import React from "react";
import "./Thread.css";

export interface ThreadProps {

}

export default function Thread(props: ThreadProps) {
  return (
    <div className="thread">
      <div className="thread__main">
        <div className="thread__name"></div>
        <div className="thread__wrapper">
          <div className="thread__author"></div>
          <div className="thread__pub-date"></div>
        </div>
      </div>
      <div className="thread__stats">
        <div className="thread__replies"></div>
        <div className="thread__views"></div>
      </div>
      <div className="thread__last-post">
        <div className="thread__last-post__user"></div>
        <div className="thread__last-post__pub-date"></div>
      </div>
    </div>
  );
}