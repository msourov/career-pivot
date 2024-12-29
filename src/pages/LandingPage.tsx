import React from "react";
import Hero from "../components/landing/Hero";
import Navbar from "../components/shared/Navbar";
import Features from "../components/landing/Features";
import WhyUs from "../components/landing/WhyUs";
import Footer from "../components/shared/Footer";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <WhyUs />
      <Footer />
    </>
  );
};

export default Landing;
