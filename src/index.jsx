import React from "react";
import ReactDOM from "react-dom/client"
import Sidebar from "./Components/Sidebar/Sidebar"
import Main from "./Components/Main/Main"
const root=ReactDOM.createRoot(document.getElementById("root"))

const G=()=>{
    return(
      <>
      <Sidebar/>
      <Main/>
      </>
      
    );
}

root.render(<G/>)