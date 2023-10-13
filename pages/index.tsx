import About from "@/components/About";
import Footer from "@/components/Footer";
import GetinTouch from "@/components/GetinTouch";
import Header from "@/components/Header";
import InfiniteLoop from "@/components/InfiniteLoop";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import { motion, useScroll } from "framer-motion";
import Head from "next/head";

export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <>
    <Head>
      <title>Nema</title>
      <link rel="icon" href="" />
    </Head>
    <motion.div
    className="fixed top-0 left-0 right-0 h-6 bg-textOrange transform-none "
    style={{ scaleX: scrollYProgress }}
    >
      <main className='w-full h-screen font-bodyFont bg-bodyColor text-white overflow-x-hidden
      overflow-y-scroll'>
        <Navbar/>
        
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
      </main>
    </motion.div>
    </>
  );
}
