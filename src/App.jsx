import CmsComponent from './pages/ContentComponent/CmsComponent';
import LoginPageComponent from './pages/ContentComponent/LoginPageComponent';
import LandingComponent from './pages/LandingPageComponent/LandingPageComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<LandingComponent />} />
    <Route path="/login-page" element={<LoginPageComponent />} />
    <Route path="/cms-page" element={<CmsComponent />} />

    </Routes>
     {/* <LandingComponent></LandingComponent> */}
    </BrowserRouter>
    </>
  )
}

export default App