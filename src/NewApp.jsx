import React from "react";
import "./style.css";
import Header from "./componets/header";
import Webheadernews from "./componets/Webheadernews";
import Webheaderwrap from "./componets/web-header-wrap";
import Bodynews from "./componets/Bodynews";


const App = () => {
  return (
    <div className="WebBody">
      <Header />
      <Webheadernews />
      <Webheaderwrap />
      <Bodynews />
    </div>
  );
};



export default App;
