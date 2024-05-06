import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Boxing from "./components/Boxing";
import Home from "./components/Home";
import Scores from "./components/Scores";
import World from "./components/World";
import Wwe from "./components/Wwe";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/worldfootball" element={<World />} />

        <Route path="/wwe" element={<Wwe />} />
        <Route path="/boxing" element={<Boxing />} />
        <Route path="/scores" element={<Scores />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
