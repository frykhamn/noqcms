import InfoContent from './infoContent';
import NavBar from './cmsDashboardLayout/NavBar';
import VideoComponent from './VideoComponent';

const ContentDashboard = () => {
  return (
    <div>
      <NavBar />
      {/* change name to Info Article? */}
      <InfoContent /> 
      {/* NoQ Demo Video */}
      <VideoComponent />
    </div>
  );
};

export default ContentDashboard;
