import './App.css';
import NavBar from './NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/Projects';
import NotFoundPage from './pages/NotFoundPage';
import Script from './Script';

function App() {
  return (
    <div className="App">
        <HomePage/>
        <NavBar/>
        <AboutPage/>
        <ProjectsPage/>
        <Script />
    </div>
  );
}

export default App;
