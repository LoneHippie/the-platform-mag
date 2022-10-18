import React from "react";

import * as classes from "./VideoCardLarge.module.scss";

const VideoCardLarge = ({ video }) => {
  return (
    <article className={classes.card}>
      <strong className={classes.title}>{video.title}</strong>
      <div className={classes.player}>
        <iframe
          className={classes.player_video}
          title="Youtube embedded player for official Platform Mag video article"
          frameBorder="false"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          src={video.youtubeUrl}
        />
      </div>
      <p className={classes.description}>{video.postText.postText}</p>

      <div className={classes.cta_section}>
        <div className={classes.cta_section__main}>
          <a href="/video-stories" alt="Go to all Platform video stories">
            View More Videos
          </a>
          <a href="/editions" alt="Go to past Platform editions">
            View Past Editions
          </a>
        </div>
        <div className={classes.cta_section__info}>
          <a href="/mission-statement" alt="Go to mission standards page">
            View Mission Statement
          </a>
          <a href="/editorial-standards" alt="Go to editorial standards page">
            View Editorial Standards
          </a>
          <a href="/our-team" alt="Go to our team page">
            Meet The Team
          </a>
        </div>
      </div>
    </article>
  );
};

export default VideoCardLarge;
