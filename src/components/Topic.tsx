import React from "react";

import "./Topic.css";
import TopicType from "../types/TopicType";
import getFormatedDate from "../util/Date";

export interface TopicProps {
  topic: TopicType;
}

export default function Topic({topic}: TopicProps) {
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
        <div className="topic__last-post-user">{getFormatedDate(topic.lastPostDate)}</div>
      </div>
    </div>
  );
}
