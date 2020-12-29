import React from "react";
import "./Thread.css";
import ThreadType from "../types/ThreadType";
import { getFormattedDate } from "../util/Date";

export interface ThreadProps {
  thread: ThreadType;
}

export default function Thread(props: ThreadProps) {
  console.log(props);
  return (
    <div className="thread">
      <div className="thread__main">
        <div className="thread__name">
          <a href="">
            {props.thread.name}
          </a>
        </div>
        <div className="thread__wrapper">
          <div className="thread__author">
            <a href="">{props.thread.author.username}</a>
          </div>
          &nbsp;
          <div className="thread__pub-date">{getFormattedDate(props.thread.pubDate)}</div>
        </div>
      </div>
      <div className="thread__stats">
        <div className="thread__replies">
          <span>Replies:&nbsp;</span>
          <span>{props.thread.replies}</span>
        </div>
        <div className="thread__views">
          <span>Views:&nbsp;</span>
          <span>{props.thread.views}</span>
        </div>
      </div>
      <div className="thread__last-post">
        <div className="thread__last-post__user">
          <a href="">{props.thread.lastPostUser.username}</a>
        </div>
        <div className="thread__last-post__pub-date">
          {getFormattedDate(props.thread.lastPostDate)}
        </div>
      </div>
    </div>
  );
}
