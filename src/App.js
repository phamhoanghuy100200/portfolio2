import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Contacts from './components/Contacts';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <main>
      <NavBar />
      <Home />
      <Skills />
      <Projects />
      <Contacts />
    </main>
  );
}

export default App;
