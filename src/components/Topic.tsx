import React from "react";

import "./Topic.css";
import TopicType from "../types/TopicType";

export interface TopicProps {
  topic: TopicType;
}

export default function Topic({topic}: TopicProps) {
  const getFormatedLastPostDate = () => {
    const getStrWithZeroPrefix = (s: string) => {
      return s.length === 1 ? `0${s}` : s;
    }

    const year = topic.lastPostDate.getFullYear();
    const month = getStrWithZeroPrefix(
      (topic.lastPostDate.getMonth() + 1).toString()
    );
    const date = getStrWithZeroPrefix(topic.lastPostDate.getDate().toString());

    const hours = getStrWithZeroPrefix(
      topic.lastPostDate.getHours().toString()
    );
    const minutes = getStrWithZeroPrefix(
      topic.lastPostDate.getMinutes().toString()
    );
    const seconds = getStrWithZeroPrefix(
      topic.lastPostDate.getSeconds().toString()
    );

    return `${date}.${month}.${year} ${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="topic">
      <div className="topic__forum">
        <div className="topic__name">
          <a href="">{topic.name}</a>
        </div>
        <div className="topic__description">{topic.description}</div>
      </div>
      <div className="topic__stats">
        <div className="topic__threads">
          <span>Threads:&nbsp;</span>
          <span>{topic.threads}</span>
        </div>
        <div className="topic__posts">
          <span>Posts:&nbsp;</span>
          <span>{topic.posts}</span>
        </div>
      </div>
      <div className="topic__last-post">
        <div className="topic__last-post-user">
          {topic.lastPostUser.username}
        </div>
        <div className="topic__last-post-user">{getFormatedLastPostDate()}</div>
      </div>
    </div>
  );
}
