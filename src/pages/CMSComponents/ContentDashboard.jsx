import InfoArticles from './infoArticleCMS/InfoArticles';
import NavBar from './cmsDashboardLayout/NavBar';
import VideoComponent from './VideoComponent';
import NewsArticles from "./newsArticleCMS/newsArticles";

const ContentDashboard = () => {
  return (
    <div>
      <NavBar />
      <InfoArticles />
      <NewsArticles /> 

      {/* NoQ Demo Video Component*/}
      <VideoComponent />
    </div>
  );
};

export default ContentDashboard;
