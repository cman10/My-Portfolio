import React from "react";
import NavigationComponent from "../NavBar/NavBar";
import HomeScreenComponent from "./HomeScreenComponent";
import "./homePage.css";
import BottomNavBar from "../NavBar/BottomnavBar";
const HomePage = () => {
  return (
    <>
      <NavigationComponent />
      <HomeScreenComponent />
      <BottomNavBar />
    </>
  );
};

export default HomePage;
