import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import NoteState from "./Context/notes/NoteState";
import Alert from "./Components/Alert";

function App() {
  return (
    <>
    <NoteState>
      <Router>
        <Alert message={"This is First full Stack Web Application"}/>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
        </Routes>
      </Router>
      </NoteState>
    </>
  );
}

export default App;
