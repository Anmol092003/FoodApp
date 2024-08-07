
import Navebar from "./components/Navebar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSectoin";
import ImproveSkill from "./components/improveSkill";
import QuateSection from "./components/QuateSection";
import Chiefsection from "./components/ChiefSection";

function App() {
  return (      
    <div className="App">
      <Navebar/>
     <div className="container main">
        <HeroSection/> 
        <ImproveSkill/>
        <QuateSection/>
        <Chiefsection/>
     </div>
     <Footer/>
    </div>
    
  )
}

export default App;
