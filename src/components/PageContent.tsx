import React from "react";

import "./PageContent.css";

export interface PageContentProps {
  children?: React.ReactNode;
}

export default function PageContent(props: PageContentProps) {
  return <div className="page-content">{props.children}</div>;
}
