import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  // let color = "dark";
  const [mode, setMode] = useState("light");
  const [color, setColor] = useState("dark");
  const [text, settext] = useState("enable dark mode")
  const toggleTheme = function () {
    if (mode === "light") {
      setMode("dark");
      settext("enable light mode");
      // color = "light";
      setColor("light");
      document.body.style.background = "#2a2a66";
      document.title = "darkmode enabled";
    }
    else {
      setMode("light");
      settext("enable dark mode");
      // color = "dark"
      setColor("dark");
      document.body.style.background = "white";
      document.title = "lightmode enabled";


    }
    console.log(color);

  }

  return (
    <>
      {/* <Navbar title="Textutility" about='about us' mode={mode} toggleTheme={toggleTheme} Text={text} color={color} /> */}
      {/* <div className="container my-3">
        <About />
      </div>
      <div className="container my-3">
        <TextForm heading="enter the text to analyze" mode={mode} />

      </div> */}

      <Router>
        <Navbar title="Textutility" about='about us' mode={mode} toggleTheme={toggleTheme} Text={text} color={color} />
        <Routes>
          <Route exact path='/' element={<div className="container my-3">
            <TextForm />
          </div>}></Route>
          <Route exact path='/about' element={<div className="container my-3">
            <About />
          </div>}></Route>
        </Routes>
      </Router>



    </>
  );
}

export default App;
