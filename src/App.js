import React from "react";
import "./styles/App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import Chatbg from "./Chatbg";

const App = () => (
  <div className="App">
    <Header />
    <main>
      <Chatbg />
      <About />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default App;
