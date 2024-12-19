import React from "react";
import "./style.css";
import Header from "./componets/header";
import Webheadernews from "./componets/Webheadernews";
import Webheaderwrap from "./componets/web-header-wrap";
import Bodynews from "./componets/Bodynews";
import Bodynews1 from "./componets/Bodynews2";

const App = () => {
  return (
    <div className="WebBody">
      <Header />
      <Webheadernews />
      <Webheaderwrap />
      <Bodynews />
      <Bodynews1 />
    </div>
  );
};



export default App;
