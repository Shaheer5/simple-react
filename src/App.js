import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Home />
        <About />
      </div>
    </>
  );
}

export default App;
