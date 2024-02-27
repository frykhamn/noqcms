import { useState, useEffect } from 'react';
import { db } from '../../services/firebase.config';
import { collection, getDocs, updateDoc, doc } from '@firebase/firestore';

const useVideoData = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'videoLinkCollection'));
        const videoItems = querySnapshot.docs.map(doc => ({
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

  const updateVideo = async (id, videoData) => {
    try {
      const videoDoc = doc(db, 'videoLinkCollection', id);
      await updateDoc(videoDoc, videoData);
      // Refresh the list after update
      const querySnapshot = await getDocs(collection(db, 'videoLinkCollection'));
      const videoItems = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setVideos(videoItems);
    } catch (error) {
      console.error('Error updating video:', error);
    }
  };

  return { videos, updateVideo };
};

export default useVideoData;
