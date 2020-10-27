import React, { useEffect, useState } from "react";
import "./App.scss";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Background from "./components/Background";
import Gallery from "./components/Gallery";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import StickyFooter from "./components/StickyFooter";
import Overlay from "./components/Overlay";

function App() {
  const [isOverlayShown, setisOverlayShown] = useState(false);
  console.log("isOverlayShown:", isOverlayShown);
  return (
    <div className="App">
      <Nav
        isOverlayShown={isOverlayShown}
        setisOverlayShown={setisOverlayShown}
      />
      <Background />
      <Landing />
      <Gallery />
      <Menu />
      <Contact />
      <StickyFooter />
      <Overlay
        isOverlayShown={isOverlayShown}
        setisOverlayShown={setisOverlayShown}
      />
    </div>
  );
}

export default App;
