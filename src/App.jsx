import "./App.css";
import Navbar from "./components/Header/Navbar/Navbar";
import HeroSection from "./components/Header/HeroSection/HeroSection";

function App() {
  return (
    <>
      <header className="foodtime_header">
        <Navbar />
        <HeroSection />
      </header>
    </>
  );
}

export default App;
