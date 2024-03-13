import ContentDashboard from "./pages/CMSComponents/ContentDashboard";
import LoginGoogle from "./authentication/LoginGoogle";
import LandingComponent from "./pages/LandingPageComponent/LandingPageComponent";
import Navbar from "./pages/LandingPageComponent/components/Navbar";
import ErrorPage from "./pages/ErrorPages/ErrorPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./authentication/PrivateRoute";
import JobbaMedOssPage from "./pages/LandingPageComponent/components/JobbaMedOssPage";
import { AuthProvider } from "./authentication/AuthProvider";
import BliVårPartner from "./pages/LandingPageComponent/components/BliVårPartnerSida";
import ArticlePage from "./pages/LandingPageComponent/components/ArticlePage";
function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Navbar></Navbar>
          <Routes basename="/noq">
            <Route path="/" element={<LandingComponent />} />
            <Route path="/loginCms" element={<LoginGoogle />} />
            <Route path="/bli-vår-partner" element={<BliVårPartner />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/jobba-med-oss" element={<JobbaMedOssPage />} />
            {/* Protect the CMS Dashboard route */}
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<ContentDashboard />} exact />
            </Route>
            <Route path="/nyheter/:title" element={<ArticlePage />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
