import { useState } from 'react';
import useVideoData from './VideoComponentForm'; 
import Video from '../LandingPageComponent/components/Video'; 
import CollapsibleContainer from '../ContentComponent/cmsDashboardLayout/CollapsibleContainer';


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
        <CollapsibleContainer title="NoQ Demo Video">

       {editVideoId && (
    <form onSubmit={handleSubmit} className="mb-4 max-w-md mx-auto">
      <div className="flex flex-col mb-4">
        <label className="mb-2 text-gray-800">Video Title</label>
        <input
          type="text"
          name="title"
          placeholder="Video Title"
          value={videoFormData.title}
          onChange={handleChange}
          className="px-4 py-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="mb-2 text-gray-800">Video Description</label>
        <textarea
          name="text"
          placeholder="Video Description"
          value={videoFormData.text}
          onChange={handleChange}
          rows="4"
          className="px-4 py-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 resize-none"
        ></textarea>
      </div>
      <div className="flex flex-col mb-4">
        <label className="mb-2 text-gray-800">YouTube Video URL</label>
        <input
          type="text"
          name="videoSrc"
          placeholder="YouTube Video URL"
          value={videoFormData.videoSrc}
          onChange={handleChange}
          className="px-4 py-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="flex justify-center">
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
          Update Video
        </button>
        <button type="button" onClick={() => setEditVideoId(null)} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Cancel
        </button>
      </div>
    </form>
  )}

  {/* List of Videos */}
  {videos.map((video, index) => (
  <div key={video.id} className="mb-8 relative">
    <Video
      title={video.title}
      content={video.text}
      videoSrc={video.videoSrc}
      left={index % 2 === 0} // Assuming 'left' is a prop that determines the styling or layout
    />
    {/* Edit Button */}
    <div className="flex justify-center mt-2 ml-4">
      <button
        onClick={() => {
          setEditVideoId(video.id);
          setVideoFormData({
            title: video.title,
            text: video.text,
            videoSrc: video.videoSrc,
          });
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
      >
        Edit
      </button>
    </div>
  </div>
))}
</CollapsibleContainer>
</>
  );
}

export default VideoComponent;
