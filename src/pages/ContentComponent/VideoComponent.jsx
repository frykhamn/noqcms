// VideoComponent.jsx
import React from 'react';
import { useState, useEffect } from 'react';
import useVideoData from './VideoComponentForm';
import Video from '../LandingPageComponent/components/Video';

function VideoComponent() {
  const {videos, addVideo, updateVideo, deleteVideo} = useVideoData();
  const [editVideoId, setEditVideoId] = useState(null);
  const [videoFormData, setVideoFormData] = useState({ title: '', text: '', videoSrc: '' });

  // Handle change for form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVideoFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Submit form data for add or update
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editVideoId) {
      await updateVideo(editVideoId, videoFormData);
    } else {
      await addVideo(videoFormData);
    }
    setEditVideoId(null); // Reset edit state
    setVideoFormData({ title: '', text: '', videoSrc: '' }); // Clear form
  };

  return (
    <>
      {/* Video Form for Adding/Editing */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Video Title"
          value={videoFormData.title}
          onChange={handleChange} />
        <input
          type="text"
          name="text"
          placeholder="Video Description"
          value={videoFormData.text}
          onChange={handleChange} />
        <input
          type="text"
          name="videoSrc"
          placeholder="Video Source URL"
          value={videoFormData.videoSrc}
          onChange={handleChange} />
        <button type="submit">{editVideoId ? 'Update Video' : 'Add Video'}</button>
      </form>

      {/* List of Videos */}
      {videos.map((video) => (
        <div key={video.id}>
          <Video
            title={video.title}
            content={video.text}
            videoSrc={video.videoSrc}
            left={false} />
          <button onClick={() => {
            setEditVideoId(video.id);
            setVideoFormData({ title: video.title, text: video.text, videoSrc: video.videoSrc });
          } }>Edit</button>
          <button onClick={() => deleteVideo(video.id)}>Delete</button>
        </div>
      ))}
    </>
  );
}

export default VideoComponent;
