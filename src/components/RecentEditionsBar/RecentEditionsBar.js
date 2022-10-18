import React from "react";

import EditionCardMini from "../EditionCardMini";

import { useWindowDimensions } from "../../hooks";

import * as classes from "./RecentEditionsBar.module.scss";

//TODO ::: Add More Editions button to bottom of section

const RecentEditionsBar = ({ editions }) => {
  const { screenWidth } = useWindowDimensions();

  const sortedEditions = editions.sort(
    (a, b) => b.node.editionNumber - a.node.editionNumber
  );

  //change number of editions displayed based on screen width
  switch (true) {
    case screenWidth < 500:
      sortedEditions.length = 2;
      break;
    case screenWidth >= 500 && screenWidth < 750:
      sortedEditions.length = 3;
      break;
    case screenWidth >= 750 && screenWidth < 1024:
      sortedEditions.length = 4;
      break;
    default:
      break;
  }

  return (
    <section className={classes.bar}>
      <div className={classes.bar_title}>Recent Editions</div>
      <div className={classes.bar_content}>
        {sortedEditions.map((el, index) => (
          <EditionCardMini
            key={`mini-edition-card-${index}`}
            edition={el.node}
          />
        ))}
      </div>
    </section>
  );
};

export default RecentEditionsBar;
