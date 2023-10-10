import Image from "next/image";
import React from "react";
import play from "../public/images/play.svg";
import content from "../data/content";
import { useState, useEffect } from "react";
import AccordionComponent from "./Accordion";

const About = () => {
  const [data, setData] = useState([...content.accordion]);  
  return (
    <div className="max-w-contentContainer mx-auto py-4 mdl:py-4 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
      <div className="flex xl:flex-row flex-col justify-between">
        <div className="flex w-full xl:w-1/2 items-center gap-4 ">
          <div className="text-4xl lg:text-5xl flex flex-col font-bold">
            <h1>
              About <span className="text-textOrange">Us</span>
            </h1>
          </div>
          <div className="border-b-4 border-textOrange w-1/5"></div>
        </div>
        <div className="xl:w-1/2">
          <p className="text-md font-normal text-white/50">
            We are branding agency team lead by callum and kate. We have a
            talented web developer, UI-UX Design and Branding.
          </p>
        </div>
      </div>
      <div className="flex xl:flex-row flex-col my-16 gap-10 xl:gap-2 w-full">
        <div className="flex items-center justify-center xl:w-3/5-10 w-full h-96 xl:h-auto rounded-3xl bg-center bg-gray-400 bg-blend-multiply bg-[url('../public/images/portrait.jpeg')] bg-cover">
          <div className="">
            <Image className="" src={play} alt="play" />
          </div>
        </div>
        <div className="xl:w-2/5 w-full">
          <div className="rounded-3xl grid grid-col-1 md:grid-cols-2 xl:grid-cols-1 gap-2">
            {data &&
              data.map((info, index) => {
                return (
                  <AccordionComponent
                    key={index}
                    term={info.term}
                    title={info.title}
                    desc={info.desc}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
