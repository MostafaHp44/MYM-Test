import './App.css';
import Develop from './Components/Develop/Develop';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import OurProjects from './Components/OurProjects/OurProjects';
import Services from './Components/Services/Services';
import Support from './Components/Support/Support';
import TeamWork from './Components/TeamWork/TeamWork';
import Welcom from './Components/Welcom/Welcom';
import WhoWe from './Components/WhoWe/WhoWe';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Welcom/>
    <WhoWe/>
    <Services/>
    <Support/>
    <TeamWork/>
    <OurProjects/>
    <Develop/>
    <Footer/>
    </div>
  );
}

export default App;
