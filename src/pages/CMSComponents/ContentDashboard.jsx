import InfoArticles from './infoArticleCMS/InfoArticles';
import NavBar from './cmsDashboardLayout/NavBar';
import VideoComponent from './videoComponent/VideoComponent';
import NoqMembers from './noqMembers/noqMembers';

const ContentDashboard = () => {
  return (
    <div>
      <NavBar />
      <InfoArticles />
      {/* NoQ Demo Video Component*/}
      <VideoComponent />
      {/* NoQ Members */}
      <NoqMembers />
    </div>
  );
};

export default ContentDashboard;
