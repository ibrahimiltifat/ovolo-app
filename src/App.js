import Header from "./components/Header";
import AddCategory from "./pages/AddCategory";
import Data from "./pages/Data";

import React, { useState, useEffect } from "react";
// import firebase from "./Firebase";

function App() {
  return (
    <>
      {/* <p>aaaa</p> */}
      <Header />
      <AddCategory />
    </>
  );
}

export default App;
