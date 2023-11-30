import AboutUs from "./components/aboutUs/AboutUs";
import ChooseUs from "./components/chooseUs/ChooseUs";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AboutUs />
      <Navbar />
      <Hero />
      <ChooseUs />
      <Footer />
    </div>
  );
}

export default App;
