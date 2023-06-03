import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaStop } from 'react-icons/fa';

function VideoPlayer() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const videoElement = videoRef.current;
    videoElement.addEventListener('loadedmetadata', handleVideoMetadataLoaded);
    videoElement.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      videoElement.removeEventListener('loadedmetadata', handleVideoMetadataLoaded);
      videoElement.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const handleVideoMetadataLoaded = () => {
    const { duration } = videoRef.current;
    setProgress(0);
    setCurrentTime(0);
    videoRef.current.currentTime = 0;
    videoRef.current.pause();
    videoRef.current.duration = duration;
  };

  const handleTimeUpdate = () => {
    const { currentTime, duration } = videoRef.current;
    const progressPercentage = (currentTime / duration) * 100;
    setProgress(progressPercentage);
    setCurrentTime(currentTime);
  };

  const toggleVideoStatus = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const stopVideo = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.pause();
    setIsPlaying(false);
  };

  const handleProgressChange = (e) => {
    const { value } = e.target;
    const currentTime = (value * videoRef.current.duration) / 100;
    videoRef.current.currentTime = currentTime;
    setProgress(value);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="video-player">

<div>
      <video
        ref={videoRef}
        src="https://ik.imagekit.io/dnwefib6s4/try.mp4?updatedAt=1685735506901"
        poster="http://zarazamanian.com/codepen/zara-poster.JPG"
        id="video"
        onClick={toggleVideoStatus}
      ></video>

      <div className="controls">
        <button className="btn" id="play" onClick={toggleVideoStatus}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button className="btn" id="stop" onClick={stopVideo}>
          <FaStop />
        </button>
        <input
          type="range"
          className="progressbar"
          id="progressbar"
          min="0"
          max="100"
          step="0.1"
          value={progress}
          onChange={handleProgressChange}
        />

        <span className="timestamp" id="timestamp">
          {formatTime(currentTime)}
        </span>
      </div>
    </div>
  </div>
  );
}

export default VideoPlayer;
