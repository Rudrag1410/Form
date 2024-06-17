import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import LevelTwo from "./pages/LevelTwo";
import LevelThree from "./pages/LevelThree";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LevelTwo" element={<LevelTwo />} />
        <Route path="/LevelThree" element={<LevelThree />} />
      </Routes>
    </Router>
  );
}

export default App;
