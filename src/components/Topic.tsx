import React from "react";

import "./Topic.css";
import TopicType from "../types/TopicType";
import { getFormattedDate } from "../util/Date";
import { Link } from "react-router-dom";

export interface TopicProps {
  topic: TopicType;
}

export default function Topic({topic}: TopicProps) {
  return (
    <div className="topic">
      <div className="topic__forum">
        <div className="topic__name">
          <Link to={`/topic/${topic.id}`}>{topic.name}</Link>
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
        <div className="topic__last-post-date">{getFormattedDate(topic.lastPostDate)}</div>
      </div>
    </div>
  );
}
