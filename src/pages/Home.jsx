import React from "react";
import NavigationBar from "../components/NavigationBar";
import Jumbotron from "../components/Jumbotron";
import PopularDestinations from "../components/PopularDestinations";
import AboutUs from "../components/AboutUs";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <div>
      <div className="myBg">
        <NavigationBar />
        <Jumbotron />
      </div>
      <PopularDestinations />
      <AboutUs />
      <GetStarted />
      <Footer />
    </div>
  );
}
