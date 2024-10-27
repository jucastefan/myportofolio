import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import useFirebase from "../src/hooks/use-firebase";
import "./App.css";
import Header from "./components/js/Header";
import About from "./pages/About/About";
import Certifications from "./pages/Certifications/Certifications";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Skills from "./pages/Skills/Skills";
import Work from "./pages/Work/Work";

const App = () => {
  let themeMode = localStorage.getItem("themeMode");
  if (!themeMode || themeMode === undefined) {
    localStorage.setItem("themeMode", "light");
  }

  const [theme, setTheme] = useState(localStorage.getItem("themeMode"));

  const {
    projects,
    certifications,
    isLoadingProjects,
    isLoadingCertifications,
  } = useFirebase();

  const toggleTheme = () => {
    if (localStorage.getItem("themeMode") === "dark") {
      setTheme(() => "light");
    } else if (localStorage.getItem("themeMode") === "light") {
      setTheme(() => "dark");
    }
  };

  localStorage.setItem("themeMode", theme);
  themeMode = localStorage.getItem("themeMode");

  return (
    <Router>
      <main className="App" id={themeMode}>
        <Header toggleTheme={toggleTheme} theme={themeMode} />
        <Routes>
          <Route path={"/"} element={<Home theme={themeMode} />} exact></Route>
          <Route path={"/about"} element={<About />}></Route>
          <Route
            path={"/work"}
            element={<Work projects={projects} loading={isLoadingProjects} />}
          ></Route>
          <Route path={"/contact"} element={<Contact />}></Route>
          <Route path={"/skills"} element={<Skills />}></Route>
          <Route
            path={"/certifications"}
            element={
              <Certifications
                certifications={certifications}
                loading={isLoadingCertifications}
              />
            }
          ></Route>
        </Routes>
        <footer class="footer bg-link fade-in text-center text-white" id="">
          <div className="container p-1"></div>
          <div class="text-center">
            <p>Handcrafted by Ștefan Juca &copy; 2023</p>
          </div>
        </footer>
      </main>
    </Router>
  );
};

export default App;
