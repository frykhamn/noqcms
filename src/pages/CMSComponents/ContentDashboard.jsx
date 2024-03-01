import InfoArticles from './InfoArticles';
import NavBar from './cmsDashboardLayout/NavBar';
import VideoComponent from './VideoComponent';

const ContentDashboard = () => {
  return (
    <div>
      <NavBar />
      <InfoArticles />
      {/* NoQ Demo Video Component*/}
      <VideoComponent />
    </div>
  );
};

export default ContentDashboard;
