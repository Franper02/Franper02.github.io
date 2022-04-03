import Header from './Components/Header';
import './App.css';
import SideBar from './Components/SideBar';
import About from './Components/About';
import Certifications from './Components/Certifications';
import Software from './Components/Software';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <About/>
        <Certifications/>
        <Software />
        <Footer />
      </div>
      <SideBar />
    </div>
  );
}

export default App;
