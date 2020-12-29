import React from "react";
import "./TableHeaderColumn.css";

export interface TableHeaderColumnProps {
  children?: React.ReactNode;
  className?: string;
}

export default function TableHeaderColumn({ children, className }: TableHeaderColumnProps) {
  return <th className={`table-header-column ${className}`}>{children}</th>;
}
