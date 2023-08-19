import React from "react";
import Nav from "./components/NavBare";
import Hero from "./components/Hero";
import SoundSection from "./components/SoundSection";
import DisplaySection from "./components/DisplaySection";
import WebGiViewer from "./components/WebGiViewer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <SoundSection />
      <DisplaySection />
      <WebGiViewer />
    </div>
  );
}

export default App;
