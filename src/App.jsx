import CmsDashboard from './pages/ContentComponent/CmsDashboard';
import LoginGoogle from "./authentication/LoginGoogle"
import LandingComponent from './pages/LandingPageComponent/LandingPageComponent';
import Navbar from './pages/LandingPageComponent/components/Navbar';
import ErrorPage from './pages/ErrorPages/ErrorPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes basename="/noqcms">
          <Route path="/" element={<LandingComponent />} />
          <Route path="/loginCms" element={<LoginGoogle />} />
          <Route path="/cmsDashboard" element={<CmsDashboard />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App