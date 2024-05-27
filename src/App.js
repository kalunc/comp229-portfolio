/* 
File name: App.js
Student's Name: Ka Lun Cheung
StudentID: 301341904
Date: 2024-05-25
*/

import Navbar from "./components/Navbar/navbar";
import Intro from "./components/AboutMe/intro";
import Home from "./components/Home/home";
import Skills from "./components/Services/skills";
import Projects from "./components/Projects/projects";
import Contact from "./components/Contact/contact";


function App() {
  return (
    <div className="App">
        <Navbar />
        <Home />
        <Intro />
        <Skills />
        <Projects />
        <Contact />
        
    </div>
  );
}

export default App;
