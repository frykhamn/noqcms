import InfoArticles from './infoArticleCMS/InfoArticles';
import NavBar from './cmsDashboardLayout/NavBar';
import VideoComponent from './VideoComponent';

const ContentDashboard = () => {
  return (
    <div>
      <NavBar />
      <InfoArticles />
      <NewsArticles /> 

      {/* NoQ Demo Video Component*/}
      <VideoComponent />
      {/* NoQ Members */}
      <NoqMembers />
    </div>
  );
};

export default ContentDashboard;
