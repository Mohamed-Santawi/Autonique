import React from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import HeroNew from "./components/HeroNew";
import Services from "./components/Services";
import Solutions from "./components/Solutions";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50"
    >
      <Header />
      <HeroNew />
      <Services />
      <Solutions />
      <About />
      <Contact />
      <Footer />
    </motion.div>
  );
}

export default App;
