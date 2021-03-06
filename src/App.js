import { Route, Routes } from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";
import Blog from "./components/Layout/Blog/Blog";
import Details from "./components/Layout/Details/Details";
import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import ListHotel from "./components/Layout/ListHotel/ListHotel";
import ListTour from "./components/Layout/ListTour/ListTour";
import Slider from "./components/Layout/Slider/Slider";
import Subscribe from "./components/Layout/Subscribe/Subscribe";
import InfoTour from "./components/Layout/Tour/InfoTour";
import Login from "./components/Layout/Tour/Login";
import Register from "./components/Layout/Tour/Register";

const App = () => {
  return (
    <div className="wrapper">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login/" element={<Login />}></Route>
        <Route path="/details/" element={<Details />}></Route>
        <Route path="/infotour/:id" element={<InfoTour />}></Route>
        <Route path="/login/" element={<Login />}></Route>
        <Route path="/register/" element={<Register />}></Route>
      </Routes>

      <Subscribe />

      <Footer />
    </div>
  );
};

export default App;
