import React from "react";
import Navbar from '../components/Navbar'
import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import GettingStarted from "../components/GettingStarted";
import Footer from "../components/Footer";

function Home(){
    return (
        <>
        <Navbar/>
        <Hero />
        <Features />
        <Testimonials />
        <GettingStarted />
        <Footer />
        </>
    )
}

export default Home;