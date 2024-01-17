import CmsComponent from './pages/ContentComponent/CmsComponent';
import LoginPageComponent from './pages/ContentComponent/LoginPageComponent';
import LandingComponent from './pages/LandingPageComponent/LandingPageComponent';
import Navbar from './components/Navbar';
import ErrorPage from './pages/ErrorPages/ErrorPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes basename="/noqcms">
          <Route path="/" element={<LandingComponent />} />
          <Route path="/login-page" element={<LoginPageComponent />} />
          <Route path="/cms-page" element={<CmsComponent />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App