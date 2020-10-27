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
  let viewWidth = window.innerWidth;
  const [isOverlayShown, setisOverlayShown] = useState(false);
  const [isBigScreen, setisBigScreen] = useState(viewWidth > 1600);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        if (window.innerWidth > 1600) setisBigScreen(true);
        else setisBigScreen(false);
      },
      [window.innerWidth]
    );
  });

  return (
    <div className="App">
      <Nav
        isOverlayShown={isOverlayShown}
        setisOverlayShown={setisOverlayShown}
      />
      <Background />
      <Landing />
      <Gallery />
      <Menu isBigScreen={isBigScreen} />
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
