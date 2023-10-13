// Home.jsx
import React from "react";
import { motion, useScroll } from "framer-motion";
import Head from "next/head";
import Layout from "@/components/Layout";
import Content from "@/components/Content";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <Head>
        <title>Nema</title>
        <link rel="icon" href="" />
      </Head>
      <motion.div
        className="fixed top-0 left-0 right-0 h-6 bg-bodyColor  transform-none"
        style={{ scaleX: scrollYProgress }}
      >
        <Layout>
          <Content />
        </Layout>
      </motion.div>
    </>
  );
}
