import React, { useRef } from "react";
import { useOnScreen } from "../../hooks";
import showdown from "showdown";

import * as classes from "./VoicesCardLarge.module.scss";

const VoicesCardLarge = ({ voice }) => {
  const ref = useRef();
  const inView = useOnScreen(ref);

  const formattedText = () => {
    let converter = new showdown.Converter();
    let HTML = converter.makeHtml(voice.introduction.introduction);
    return HTML.slice(0, 160).trim().replace(/<p>/g, "") + "...";
  };

  return (
    <article
      className={classes.card}
      ref={ref}
      style={{
        opacity: inView ? "1" : "0",
        transform: inView ? "translateX(0)" : "translateX(-15rem)",
        transition: "all 650ms",
      }}
    >
      <img
        className={classes.cover}
        src={`https:${voice.coverImage.file.url}`}
        alt={voice.coverImage.description}
        loading="eager"
      />
      <h4 className={classes.title}>{voice.title}</h4>

      <div
        className={classes.preview_text}
        dangerouslySetInnerHTML={{ __html: formattedText() }}
      />
      <a
        href={
          voice.isPartOfEdition
            ? `/${voice.editionSlug}/${voice.slug}`
            : `/voices/${voice.slug}`
        }
        alt={"Read the full post here"}
        className={classes.cta_button}
      >
        Read Full
      </a>
    </article>
  );
};

export default VoicesCardLarge;
