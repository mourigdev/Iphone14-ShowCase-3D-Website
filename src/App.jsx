import React, { useRef } from "react";
import Nav from "./components/NavBare";
import Hero from "./components/Hero";
import SoundSection from "./components/SoundSection";
import DisplaySection from "./components/DisplaySection";
import WebGiViewer from "./components/WebGiViewer";
import Loader from "./components/Loader";
import Footer from "./components/Footer";

function App() {
  const webGiViewerRef = useRef();
  const contentRef = useRef();

  const HandlePreview = () => {
    webGiViewerRef.current.triggerPreview();
  };

  return (
    <div className="App">
      <Loader />
      <div ref={contentRef} id="content">
        <Nav />
        <Hero />
        <SoundSection />
        <DisplaySection triggerPreview={HandlePreview} />
      </div>
      <WebGiViewer contentRef={contentRef} ref={webGiViewerRef} />
      <Footer />
    </div>
  );
}

export default App;
