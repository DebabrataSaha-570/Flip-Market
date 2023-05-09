import { useEffect } from "react";
import "./App.css";
import Header from "./components/layout/Header/Header.js";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import Footer from "./components/layout/Footer/Footer";
import Home from "./components/Home/Home";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);
  return (
    <>
      <Router>
        <Route exact path="/" component={Home}></Route>
        {/* <Footer></Footer> */}
      </Router>
    </>
  );
}

export default App;
