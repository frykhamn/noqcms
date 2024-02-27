// useVideoData.js
import { useState, useEffect } from 'react';
import { db } from '../../services/firebase.config';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from '@firebase/firestore';

const useVideoData = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

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

  const addVideo = async (videoData) => {
    try {
      await addDoc(collection(db, 'videoLinkCollection'), videoData);
      fetchVideos(); // Refresh the list
    } catch (error) {
      console.error('Error adding video:', error);
    }
  };

  const updateVideo = async (id, videoData) => {
    try {
      const videoDoc = doc(db, 'videoLinkCollection', id);
      await updateDoc(videoDoc, videoData);
      fetchVideos(); // Refresh the list
    } catch (error) {
      console.error('Error updating video:', error);
    }
  };

  const deleteVideo = async (id) => {
    try {
      await deleteDoc(doc(db, 'videoLinkCollection', id));
      fetchVideos(); // Refresh the list
    } catch (error) {
      console.error('Error deleting video:', error);
    }
  };

  return { videos, addVideo, updateVideo, deleteVideo };
};

export default useVideoData;
