import BlogPost from "./components/BlogPost";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import InformationComponent from "./components/InformationComponent";
import ProfileGallery from "./components/ProfileGallery";
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
  videoSrc: "https://drive.google.com/drive/folders/1gZ6UhHIupRqUHRD8EJtou6u0V6x60wV2/preview"
};

const Main = () => {
  return (
    <>
      <main>
        <InformationComponent></InformationComponent>
        <Video content={aboutData.text}
          title={aboutData.title}
          videoSrc={aboutData.videoSrc}
          left={true}></Video>

        {/* <BlogPost></BlogPost> */}

        <Video
          content={demoData.text}
          title={demoData.title}
          videoSrc={demoData.videoSrc}
          left={false}
        ></Video>

        <Team></Team>



        <section className="py-20" style={{ backgroundColor: "#889892" }}>
          <div className="grid grid-cols-2 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-row-1 md:grid-row-2 gap-8 items-center">
              <p className="text-gray-900 mb-6 text-2xl">
                Här hittar du oss och projektets gång
              </p>

              <div className="flex flex-col md:flex-row gap-4">
                <button className="bg-white text-black px-6 py-2 rounded-md mr-4 hover:bg-blue-600 transition-colors">
                  Join Today
                </button>
                <button className="bg-transparent text-gray-600 px-6 py-2 border border-gray-600 rounded-md hover:bg-gray-900 hover:text-white transition-colors">
                  Contact us
                </button>
              </div>
            </div>
            <div>
              <p>Figma</p>
              <p>Google Drive</p>
              <p>Jira</p>
              <p>Slack</p>
            </div>
          </div>
        </section>


      </main>
    </>
  );
};

export default LandingComponent;
