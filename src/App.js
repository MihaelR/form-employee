import React from "react";
import SideMenu from "./components/SideMenu";
import AppMain from "./components/AppMain";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <SideMenu />
      <AppMain />
    </div>
  );
}

export default App;
