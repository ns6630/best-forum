import React from "react";
import "./BreadcrumbsItem.css";
import { Link } from "react-router-dom";

export interface BreadcrumbsItemProps {
  link?: string;
  name: string;
}

export default function BreadcrumbsItem(props: BreadcrumbsItemProps) {
  if (props.link) {
    return <Link to={props.link} className="breadcrumbs__item">{props.name}</Link>;
  } else {
    return <div className="breadcrumbs__item">{props.name}</div>
  }  
}
