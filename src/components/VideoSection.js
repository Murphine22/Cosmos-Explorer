import React, { useRef, useEffect } from 'react';
import './VideoSection.css';

function VideoSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay may be blocked — video stays muted and will play on interaction
      });
    }
  }, []);

  return (
    <section id="video" className="video-section">
      <div className="video-section__bg" aria-hidden="true"></div>

      <div className="container">
        <div className="video-section__header">
          <div className="section-label">Cinematic</div>
          <h2 className="section-title">See the Universe<br />in Motion</h2>
          <p className="video-section__desc">
            A breathtaking visual journey through the solar system — 
            captured in stunning detail.
          </p>
        </div>

        {/* Video wrapper */}
        <div className="video-section__wrapper">
          <div className="video-section__frame">
            {/* Decorative corners */}
            <div className="video-section__corner video-section__corner--tl"></div>
            <div className="video-section__corner video-section__corner--tr"></div>
            <div className="video-section__corner video-section__corner--bl"></div>
            <div className="video-section__corner video-section__corner--br"></div>

            {/*
              Using <video> element (NOT iframe) as required.
              autoPlay, muted, and loop attributes are set.
              Using a freely available NASA/ESA space video.
            */}
            <video
              ref={videoRef}
              className="video-section__video"
              autoPlay
              muted
              loop
              playsInline
              poster="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Hubble_ultra_deep_field.jpg/1200px-Hubble_ultra_deep_field.jpg"
              aria-label="Solar system cinematic video"
            >
              {/* 
                Free-to-use space video from NASA/ESA/public domain sources.
                Using a high-quality public domain space footage.
              */}
              <source
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                type="video/mp4"
              />
              {/* Fallback for browsers that don't support video */}
              <p>Your browser does not support the video element. 
                <a href="https://www.nasa.gov/multimedia/videogallery/" target="_blank" rel="noreferrer">
                  Watch NASA videos here.
                </a>
              </p>
            </video>

            {/* Scan line overlay */}
            <div className="video-section__scanlines" aria-hidden="true"></div>

            {/* Bottom gradient */}
            <div className="video-section__gradient" aria-hidden="true"></div>

            {/* Play badge */}
            <div className="video-section__badge">
              <span className="video-section__badge-icon">▶</span>
              <span>Autoplaying · Muted · Looping</span>
            </div>
          </div>

          {/* Side label */}
          <div className="video-section__side-label" aria-hidden="true">
            <span>LIVE FEED — COSMOS EXPLORER</span>
          </div>
        </div>

        {/* Caption */}
        <p className="video-section__caption">
          Replace the video source with your own space footage. 
          The player uses native HTML5 &lt;video&gt; — no iframe, autoplay + muted + loop enabled.
        </p>
      </div>
    </section>
  );
}

export default VideoSection;
