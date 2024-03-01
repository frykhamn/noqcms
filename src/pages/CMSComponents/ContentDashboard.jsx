import InfoArticles from './infoArticles';
import NavBar from './cmsDashboardLayout/NavBar';
import VideoComponent from './VideoComponent';

const ContentDashboard = () => {
  return (
    <div>
      <NavBar />
      {/* change name to Info Article? */}
      <InfoArticles /> 
      {/* NoQ Demo Video */}
      <VideoComponent />
    </div>
  );
};

export default ContentDashboard;
