import React, { useState } from "react";
import "./Category.css";
import Table from "./Table";

export interface CategoryProps {
  name: string;
  initialExpanded?: boolean;
  children?: React.ReactNode;
}

export default function Category(props: CategoryProps) {
  const [expanded, setExpanded] = useState(props.initialExpanded);

  return (
    <Table className="category">
      <div className="category__header" onClick={() => setExpanded(!expanded)}>
        <div className="category__name">
          {props.name}{" "}
          <span className="category__toggle">
            {expanded ? "[Expand]" : "[Collapse]"}
          </span>
        </div>
        <div className="category__empty"></div>
        <div className="category__last-post">Last Post</div>
      </div>
      <div
        className={
          expanded
            ? "category__body"
            : "category__body category__body_collapsed"
        }
      >
        {props.children}
      </div>
    </Table>
  );
}
