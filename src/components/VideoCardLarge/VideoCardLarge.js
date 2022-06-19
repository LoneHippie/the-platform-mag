import React from 'react'

import * as classes from "./VideoCardLarge.module.scss";

const VideoCardLarge = ({video}) => {

  return (
    <article className={classes.card}>
        <strong className={classes.title}>{video.title}</strong>
        <iframe 
            className={classes.player}
            title="Youtube embedded player for official Platform Mag video article"
            height='100%' width='100%' 
            frameBorder="false" 
            allow="encrypted-media; gyroscope;" 
            allowFullScreen 
            src={video.youtubeUrl} 
        />
        <p className={classes.description}>{video.postText.postText}</p>

        <div className={classes.cta_section}>
          <a className={classes.cta_section__edition} href="/editions" alt="Go to past Platform editions">View Past Editions</a>
          <div className={classes.cta_section__info}>
              <a href="/mission-statement" alt="Go to mission standards page">View Mission Statement</a>
              <a href="/editorial-standards" alt="Go to editorial standards page">View Editorial Standards</a>
              <a href="/our-team" alt="Go to our team page">Meet The Team</a>
          </div>
        </div>
    </article>
  )
}

export default VideoCardLarge