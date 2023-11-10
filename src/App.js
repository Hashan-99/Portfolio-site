
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from './Components/Navbar1';
import Banner from './Components/Banner';
import { Banner1 } from './Components/Banner1';
import { Skills } from './Components/Skills';
import { Projects } from './Components/Projects';
import { Contact } from "./Components/Contact";
import Footer1 from './Components/Footer1';




function App() {
  return (
    <div className="App">
      <Navbar1/>
      <Banner1/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer1/>
     
      
      
    </div>
  );
}

export default App;
