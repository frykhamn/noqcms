import React, { useState } from "react";
import useVideoData from "./VideoComponentForm"; // Ensure the path is correct

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

  // Function to extract YouTube video ID from a URL
  function extractYouTubeID(url) {
    const regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : null;
  }

  // Debug: Log the extracted YouTube ID to verify correctness
  const debugYouTubeIDExtraction = (url) => {
    const id = extractYouTubeID(url);
    console.log("Extracted YouTube ID:", id); // Check the console to see the output
    return id;
  };

  // Submit form data for update
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editVideoId) {
      const videoID = extractYouTubeID(videoFormData.videoSrc);
      const updatedData = {
        ...videoFormData,
        videoSrc: videoID, // Store only the video ID
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
          <button type="submit">Update Video</button>
        </form>
      )}

      {/* List of Videos */}
      {videos.map((video) => (
        <div key={video.id}>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${extractYouTubeID(
              video.videoSrc
            )}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <button
            onClick={() => {
              setEditVideoId(video.id);
              setVideoFormData({
                title: video.title,
                text: video.text,
                videoSrc: video.videoSrc,
              });
            }}
          >
            Edit
          </button>
        </div>
      ))}
    </>
  );
}

export default VideoComponent;
