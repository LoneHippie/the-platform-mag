import React, { useRef, useEffect } from "react";
import { useOnScreen } from "../../hooks";
import showdown from "showdown";

import ShareButton from "../ShareButton";

import * as classes from "./InterviewCardLarge.module.scss";

const InterviewCardLarge = ({ interview }) => {
  const ref = useRef();
  const inView = useOnScreen(ref);

  const formattedText = () => {
    let converter = new showdown.Converter();
    let HTML = converter.makeHtml(interview.text.text);
    return HTML;
  };

  const textRef = useRef();

  useEffect(() => {
    if (textRef.current) {
      while (textRef.current.childNodes.length > 1) {
        textRef.current.removeChild(textRef.current.lastChild);
      }
    }
  }, [textRef]);

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
        src={`https:${interview.coverImage.file.url}`}
        alt={interview.coverImage.description}
      />
      <h4 className={classes.title}>{interview.title}</h4>
      <h5 className={classes.subtitle}>{interview.subtitle}</h5>
      <div
        ref={textRef}
        className={classes.preview_text}
        dangerouslySetInnerHTML={{ __html: formattedText() }}
      />
      <div className={classes.cta_container}>
        <a
          href={
            interview.isPartOfEdition
              ? `/${interview.editionSlug}/${interview.slug}`
              : `/interview/${interview.slug}`
          }
          alt={"Read the full interview here"}
          className={classes.cta_button}
        >
          Read Full
        </a>
        <ShareButton
          darkIcon={true}
          link={`https://www.theplatformmag.com/${interview.editionSlug}/${interview.slug}`}
        />
      </div>
    </article>
  );
};

export default InterviewCardLarge;
