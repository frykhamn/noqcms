import InfoArticles from './infoArticleCMS/InfoArticles';
import NavBar from './cmsDashboardLayout/NavBar';
import VideoComponent from './videoComponent/VideoComponent'
import NewsArticles from "./newsArticleCMS/newsArticles";
import MemberForm from './noqMembers/membersForm';

const ContentDashboard = () => {
  return (
    <div>
      <NavBar />
      <InfoArticles />
      <NewsArticles /> 
      <VideoComponent />
      
      {/* Membership Form */}
      <MemberForm />
    </div>
  );
};

export default ContentDashboard;
