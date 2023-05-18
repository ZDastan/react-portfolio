import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
      </Routes>
      <div className="home">
      <div className="about">
        <h2> Hi, My Name is Zehra</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
        </div>
      </div>
      </div>
      <Footer />
     </Router>
    </div>
  );
}

export default App;
