// Content.jsx
import React from "react";
import Header from "@/components/Header";
import InfiniteLoop from "@/components/InfiniteLoop";
import About from "@/components/About";
import Services from "@/components/Services";
import Project from "@/components/Project";
import Testimonial from "@/components/Testimonial";
import GetinTouch from "@/components/GetinTouch";
import Footer from "@/components/Footer";
import { motion, useScroll } from "framer-motion";

const Content = () => {
  return (
    <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between ">
          
          <motion.div 
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ delay: 1.5 }}
          className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
            {/* <LeftSide/> */}
          </motion.div>
          <div className="h-[88vh] w-full mx-auto p-4 ">
            <Header/>
            <InfiniteLoop/>
            <About/>
            <Services/>
            <Project/>
            <Testimonial/>
            <GetinTouch/>
            <Footer/>
          </div>
          <motion.div 
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ delay: 1.5 }}
          className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0">
          </motion.div>
    </div> 
  );
};

export default Content;
