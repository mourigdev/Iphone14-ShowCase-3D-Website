import React, { useRef } from "react";
import Nav from "./components/NavBare";
import Hero from "./components/Hero";
import SoundSection from "./components/SoundSection";
import DisplaySection from "./components/DisplaySection";
import WebGiViewer from "./components/WebGiViewer";

function App() {
  const webGiViewerRef = useRef();
  const contentRef = useRef();

  const HandlePreview = () => {
    webGiViewerRef.current.triggerPreview();
  };

  return (
    <div className="App">
      <div ref={contentRef} id="content">
        <Nav />
        <Hero />
        <SoundSection />
        <DisplaySection triggerPreview={HandlePreview} />
      </div>
      <WebGiViewer contentRef={contentRef} ref={webGiViewerRef} />
    </div>
  );
}

export default App;
