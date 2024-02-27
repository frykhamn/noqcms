import BlogPost from "./components/BlogPost";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import InformationComponent from "./components/InformationComponent";
import Post from "./components/Post";
import Team from "./components/Team";
import Video from "./components/Video";

const LandingComponent = () => {
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <Main></Main>
      <FooterComponent></FooterComponent>
    </div>
  );
};

const demoData =
{
  title: "Demo inspelning",
  text: "Från den 15/12 - 2023. Vi presenterar NoQ-gänget och går igenom varför vi gör det här samt vad våra förhoppningar är. Disskutioner om värdefull och nödvändig feedback kring produkten, dess syfte, användningsområde samt vilka problem den kan lösa.",
  videoSrc: "https://drive.google.com/file/d/1DcezvhiJ3QRuydUTvxG8zZlm9EsrS-Zk/preview"
};

const aboutData =
{
  title: "Om oss video presentation",
  text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  videoSrc: "https://youtu.be/WnBojfIfds8"
};

const Main = () => {
  return (
    <>
      <main>
        <InformationComponent></InformationComponent>
{/*         <Video content={aboutData.text}
          title={aboutData.title}
          videoSrc={aboutData.videoSrc}
          left={true}></Video> */}
{/* <Post></Post>
 */}
      {/* // Todo Ove's Blogpost cms  */}
        {/* <BlogPost></BlogPost> */} 

        <Video
          content={demoData.text}
          title={demoData.title}
          videoSrc={demoData.videoSrc}
          left={false}
        ></Video>

        <Team></Team>



      </main>
    </>
  );
};

export default LandingComponent;
