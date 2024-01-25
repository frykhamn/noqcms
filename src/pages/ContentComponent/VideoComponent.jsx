// VideoComponent.jsx
import React, { useState, useEffect } from 'react';
import { db } from '../../services/firebase.config';
import { getDocs, collection } from '@firebase/firestore';
import Video from '../LandingPageComponent/components/Video';

const VideoComponent = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'videoLinkCollection'));
        const videoItems = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setVideos(videoItems);
      } catch (error) {
        console.error('Error fetching video data:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <>
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          content={video.text}
          videoSrc={video.videoSrc}
          left={false}
        />
      ))}
    </>
  );
};

export default VideoComponent;
