'use client';

import { useEffect } from "react";

export function useAutoPauseVideos(selector = "[data-autopause-video]") {
  useEffect(() => {
    const videos = Array.from(
      document.querySelectorAll<HTMLVideoElement>(selector),
    );

    if (videos.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;

          if (!entry.isIntersecting && !video.paused) {
            video.pause();
          }
        });
      },
      {
        threshold: 0.15,
      },
    );

    videos.forEach((video) => observer.observe(video));

    return () => observer.disconnect();
  }, [selector]);
}

