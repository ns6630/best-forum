import React from "react";
import "./Breadcrumbs.css";

export interface ThreadListProps {
  children: React.ReactNode;
}

export default function ThreadList(props: ThreadListProps) {
  return (
    <div className="thread-list">
      <div className="thread-list__header">
        <div className="thread-list__title"></div>
        <div className="thread-list__title"></div>
        <div className="thread-list__title"></div>
      </div>
      {props.children}
    </div>
  );
}
