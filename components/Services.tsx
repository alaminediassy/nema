import React, { useState } from "react";
import content from "../data/content";
import AccordionService from "./AccordionService";
import icon1 from "../public/images/store/icon1.svg";
import icon2 from "../public/images/store/icon2.png";
import icon3 from "../public/images/store/icon3.png";
import projet1 from "../public/images/store/projet1.png";
import projet2 from "../public/images/store/projet2.png";

import Image from "next/image";

const Services = () => {
  const [data, setData] = useState([...content.accordionServices]);
  return (
    <div className="max-w-contentContainer mx-auto py-4 mdl:py-4 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
      <div className="flex xl:flex-row flex-col justify-between">
        <div className="flex w-full xl:w-1/2 items-center gap-4 ">
          <div className="text-4xl lg:text-5xl flex flex-col font-bold">
            <h1>
              Our <span className="text-textOrange">Services</span>
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
      <div className="w-full">
        <div className="rounded-3xl grid grid-col-1 xl:grid-cols-1 gap-4">
          {data &&
            data.map((info, index) => {
              let iconComponent;
              let imageComponent;
              switch (index) {
                case 0: imageComponent = (
                    <div className="flex flex-col md:flex-row gap-4 justify-between pt-4 xl:w-full">
                        <div className="md:w-1/2 w-[90%] mx-auto"><Image src={projet1} alt="projet 1" className="w-full rounded-2xl" /></div>
                        
                        <div className="md:w-1/2 w-[90%] mx-auto"><Image src={projet2} alt="projet 1" className="w-full rounded-2xl" /></div>
                    </div>
                  );
                    break;
                case 1: imageComponent = (
                    <div className="flex flex-col md:flex-row gap-4 justify-between pt-4 xl:w-full">
                        <div className="md:w-1/2 w-[90%] mx-auto"><Image src={projet1} alt="projet 1" className="w-full rounded-2xl" /></div>
                        
                        <div className="md:w-1/2 w-[90%] mx-auto"><Image src={projet2} alt="projet 1" className="w-full rounded-2xl" /></div>
                    </div>
                   );
                   break       
                default:
                    break;
              }
              // changement des icons en fonction du domaine
              switch (index) {
                case 0:
                  iconComponent = (
                    <Image src={icon1} alt="Icône 1" width={30} height={30} />
                  );
                  break;
                case 1:
                  iconComponent = (
                    <Image src={icon2} alt="Icône 2" width={30} height={30} />
                  );
                  break;
                // Ajout de plus de cas si nécessaire
                default:
                  iconComponent = (
                    <Image src={icon3} alt="Icône 3" width={30} height={30} />
                  );
                  break;
              }
              return (
                <AccordionService
                  key={index}
                  icon={iconComponent}
                  title={info.title}
                  description={info.description}
                  image1={imageComponent}
                  image2={info.image2}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Services;
