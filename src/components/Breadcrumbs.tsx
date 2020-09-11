import React from "react";
import "./Breadcrumbs.css";

export interface BreadcrumbsProps {
  children: React.ReactNode;
}

export default function Breadcrumbs(props: BreadcrumbsProps) {
  return <div className="breadcrumbs">{props.children}</div>;
}
