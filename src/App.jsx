import Header from './components/header/Header';
import Project from './components/project/Project';
import Footer from './components/footer/Footer';
import Route from './components/route/Route';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Resume from './components/resume/Resume';

const App = () => {
  return <div className="app">
    <Header />
      <Route path="/">
        <About />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/portfolio">
        <Project />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/resume">
        <Resume />
      </Route>
    <Footer />
  </div>
};

export default App;