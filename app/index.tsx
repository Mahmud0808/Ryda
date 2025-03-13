import { Redirect } from "expo-router";
import React from "react";

const Home = () => {
  return <Redirect href={"/(auth)/onboarding"} />;
};

export default Home;
