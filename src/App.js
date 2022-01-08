import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Project from './components/project/Project';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Resume from './components/resume/Resume';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/React-Portfolio" element={<About />}></Route>
          <Route path="/React-Portfolio/about" element={<About />}></Route>
          <Route path="/React-Portfolio/portfolio" element={<Project />}></Route>
          <Route path="/React-Portfolio/contact" element={<Contact />}></Route>
          <Route path="/React-Portfolio/resume" element={<Resume />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App;