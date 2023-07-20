
import './App.css';
import Info from './components/Info';
import Links from './components/Links';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Recommendations from './components/Recommendations';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Links />
      <Info />
      <Projects />
      <Recommendations />
      
    </div>
  );
}

export default App;
