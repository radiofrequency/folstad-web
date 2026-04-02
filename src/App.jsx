import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Program from './pages/Program';
import Schedule from './pages/Schedule';
import Curriculum from './pages/Curriculum';
import DailyLog from './pages/DailyLog';
import Enrollment from './pages/Enrollment';
import Jobs from './pages/Jobs';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter basename="/folstad-web">
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/program" element={<Program />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/daily-log" element={<DailyLog />} />
          <Route path="/enrollment" element={<Enrollment />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
