import React from "react";
import "./TableColumn.css";

export interface TableColumnProps {
  children?: React.ReactNode;
  className?: string;
}

export default function TableColumn({ children, className }: TableColumnProps) {
  return <td className={`table-column ${className}`}>{children}</td>;
}
