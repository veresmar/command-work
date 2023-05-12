import './App.css';
import { Skills } from './components/Skills/Skills';
import { AboutMe } from './components/AboutMe/AboutMe';
import { Header } from './components/Header/Header';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Footer } from './components/Footer/Footer';
import { MainScreen } from './components/MainScreen/MainScreen';

function App() {
  return (
    <div className="App">
      <Header/>

      <AboutMe></AboutMe>
      <Skills></Skills>
      <Portfolio></Portfolio>
      <Footer></Footer>
    </div>
  );
}

export default App;
