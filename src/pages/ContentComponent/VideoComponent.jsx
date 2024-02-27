import React, { useState } from 'react';
import useVideoData from './VideoComponentForm'; // Ensure the path is correct
import Video from '../LandingPageComponent/components/Video'; // Adjust the import path as necessary

function VideoComponent() {
  const { videos, updateVideo } = useVideoData();
  const [editVideoId, setEditVideoId] = useState(null);
  const [videoFormData, setVideoFormData] = useState({
    title: "",
    text: "",
    videoSrc: "",
  });

  // Handle change for form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVideoFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Submit form data for update
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editVideoId) {
      const updatedData = {
        ...videoFormData,
      };
      await updateVideo(editVideoId, updatedData);
      setEditVideoId(null); // Reset edit state
      setVideoFormData({ title: "", text: "", videoSrc: "" }); // Clear form
    }
  };

  return (
    <>
      {/* Video Form for Editing */}
      {editVideoId && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Video Title"
            value={videoFormData.title}
            onChange={handleChange}
          />
          <input
            type="text"
            name="text"
            placeholder="Video Description"
            value={videoFormData.text}
            onChange={handleChange}
          />
          <input
            type="text"
            name="videoSrc"
            placeholder="YouTube Video URL"
            value={videoFormData.videoSrc}
            onChange={handleChange}
          />
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update Video</button>
        </form>
      )}

      {/* List of Videos */}
      {videos.map((video, index) => (
        <div key={video.id} className="mb-8">
          <Video
            title={video.title}
            content={video.text}
            videoSrc={video.videoSrc}
            left={index % 2 === 0} // Assuming 'left' is a prop that determines the styling or layout
          />
          <button
            onClick={() => {
              setEditVideoId(video.id);
              setVideoFormData({
                title: video.title,
                text: video.text,
                videoSrc: video.videoSrc,
              });
            }}
            className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Edit
          </button>
        </div>
      ))}
    </>
  );
}

export default VideoComponent;
