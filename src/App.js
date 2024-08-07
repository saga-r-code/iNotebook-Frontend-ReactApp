import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import NoteState from "./Context/notes/NoteState";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Alert from "./Context/alert/AlertState";

function App() {
  return (
    <NoteState>
      <Alert> 
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/signup" exact element={<Signup />} />
          </Routes>
        </Router>
      </Alert>
    </NoteState>
  );
}

export default App;
