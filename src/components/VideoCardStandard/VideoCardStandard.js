import React from "react";

import * as classes from "./VideoCardStandard.module.scss";

const VideoCardStandard = ({ video }) => {
  return (
    <article className={classes.card}>
      <strong className={classes.title}>{video.title}</strong>
      <iframe
        className={classes.player}
        title="Youtube embedded player for official Platform Mag video article"
        height="100%"
        width="100%"
        frameBorder="false"
        allow="encrypted-media; gyroscope;"
        allowFullScreen
        src={video.youtubeUrl}
      />
      <p className={classes.description}>{video.postText.postText}</p>
    </article>
  );
};

export default VideoCardStandard;
