import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import CharactersPage from "./components/pages/CharactersPage";
import Header from "./components/layout/Header";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<CharactersPage />} />
          </Routes>
        </main>
      </Router>
    </>
  );
};

export default App;
