import { useState, useEffect } from "react";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../../services/firebase.config"; // Import your Firebase config

import BlogPost from "./components/BlogPost";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import InformationComponent from "./components/InformationComponent";
import Post from "./components/Post";
import Team from "./components/Team";
import Video from "./components/Video";
import News from "./components/News";

const LandingComponent = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const videosCollectionRef = collection(db, "videoLinkCollection");
        const data = await getDocs(videosCollectionRef);
        const fetchedVideos = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setVideos(fetchedVideos);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <Main videos={videos}></Main>
      <FooterComponent></FooterComponent>
    </div>
  );
};

const demoData = {
  title: "Demo inspelning",
  text: "Från den 15/12 - 2023. Vi presenterar NoQ-gänget och går igenom varför vi gör det här samt vad våra förhoppningar är. Disskutioner om värdefull och nödvändig feedback kring produkten, dess syfte, användningsområde samt vilka problem den kan lösa.",
  // videoSrc: "https://drive.google.com/file/d/1DcezvhiJ3QRuydUTvxG8zZlm9EsrS-Zk/preview"
  videoSrc: "https://youtu.be/WnBojfIfds8",
};

const aboutData = {
  title: "Om oss video presentation",
  text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  videoSrc: "https://youtu.be/WnBojfIfds8",
};

const Main = ({ videos }) => {
  return (
    <>
      <main>
        <InformationComponent></InformationComponent>


        {/* <News></News>  */}
        
        {/* 
        {videos.map((video) => (
          <Video
            key={video.id}
            content={video.text}
            title={video.title}
            videoSrc={video.videoSrc}
            left={false}
          />
        ))}
        */}
        <Team></Team>
      </main>
    </>
  );
};

export default LandingComponent;
