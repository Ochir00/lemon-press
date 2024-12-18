import React from "react";
import "./style.css";
import Header from "./componets/header";
import News from "./componets/news";
import HomeNews from "./componets/HomeNews";
import BodyNews from "./componets/BodyNews";

const App = () => {
  return (
    <div className="WebBody">
      <Header />
      <div className="Body">
        <News />
        <HomeNews />
        <BodyNews />
      </div>
    </div>
  );
};

export default App;
