import React from "react";
import "./Table.css";

export interface TableProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Table({ children, className }: TableProps) {
  return <table className={`table ${className}`}>{children}</table>;
}
