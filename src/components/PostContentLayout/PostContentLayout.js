import React from "react";

import * as classes from "./PostContentLayout.module.scss";

const PostContentLayout = ({ children, includeRecentEditionsBar }) => {
  return (
    <section
      className={
        includeRecentEditionsBar ? classes.layout_recent : classes.layout
      }
    >
      {children}
    </section>
  );
};

export default PostContentLayout;
