import Image from "next/image";
import woman from "../public/images/nema_profile.jpg"
import {FiChevronRight, FiChevronLeft} from "react-icons/fi"

const Testimonial = () => {

  return (
    <>
      <div className="max-w-contentContainer mx-auto pb-20 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
        <div className="flex xl:flex-row flex-col justify-between">
          <div className="flex w-full xl:w-1/2 items-center gap-4 ">
            <div className="text-4xl lg:text-5xl flex flex-col font-bold">
              <h1>
                Client <span className="text-textOrange">Says</span>
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
        {/* <div className="grid grid-cols-3 gap-2">
            <div className="col-span-2 bg-slate-400 text-center p-4">
                <div className="grid grid-cols-3  gap-2">
                    <div className="col-start-1 col-end-4 bg-blue-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Praesentium accusantium provident quas, illo ut possimus
                        facere omnis reiciendis quis dolores, aliquam eveniet quos?
                        Enim distinctio quo beatae atque repellat consequuntur.    
                    </div>
                    <div className="col-start-1 col-end-4 bg-blue-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Praesentium accusantium provident quas, illo ut possimus
                        facere omnis reiciendis quis dolores, aliquam eveniet quos?
                        Enim distinctio quo beatae atque repellat consequuntur.
                    </div>
                </div>
            </div>
            <div className="col-span-1 bg-slate-400 text-center p-4">
                <div className="grid grid-rows-3 grid-flow-col gap-2">
                    <div className="row-span-2 col-span-3 bg-red-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Praesentium accusantium provident quas, illo ut possimus
                        facere omnis reiciendis quis dolores, aliquam eveniet quos?
                        Enim distinctio quo beatae atque repellat consequuntur.
                    </div>
                    <div className="row-span-1 col-span-3 bg-red-400">hello</div>
                </div>
            </div>
        </div> */}
        <div className="flex  gap-2 flex-row w-full">
            <div className="hidden lg:block basis-2/3">
                <div className="flex flex-col gap-2">
                    <div className="p-10 bg-buttonColor rounded-3xl">
                      <div className="flex gap-2 flex-row w-full">
                        <div className="basis-1/3"> <Image className="rounded-full mx-auto" width={110} height={110} src={woman} alt="woman"/> </div>
                        <div className="basis-2/3">
                          <p className="pb-10">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Praesentium accusantium provident quas, illo ut possimus
                          facere omnis reiciendis quis dolores.
                          </p>
                          <span>Astou NDIAYE - Co founder NEMA</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-10 bg-buttonColor rounded-3xl">
                      <div className="flex gap-2 flex-row w-full">
                        <div className="basis-1/3"> <Image className="rounded-full mx-auto" width={110} height={110} src={woman} alt="woman"/> </div>
                        <div className="basis-2/3">
                          <p className="pb-10">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Praesentium accusantium provident quas, illo ut possimus
                          facere omnis reiciendis quis dolores.
                          </p>
                          <span>Astou NDIAYE - Co founder NEMA</span>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
            <div className="lg:basis-1/3 text-center">
                <div className="h-full grid grid-cols-1 gap-2 content-between">
                    <div className="flex flex-col gap-2 p-10 bg-buttonColor rounded-3xl">
                      <div><Image className="rounded-full mx-auto" width={110} height={110} src={woman} alt="woman"/></div>
                      <div>
                        <p className="xl:pb-10 pb-5">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Praesentium accusantium provident quas, illo ut possimus
                          facere omnis reiciendis quis dolores.
                        </p>
                        <span>Astou NDIAYE - Co founder NEMA</span>
                      </div>
                    </div>
                    <div className="flex w-full gap-2 ">
                      <div className="w-1/2 p-6 bg-buttonColor rounded-3xl flex justify-center items-center"> <FiChevronLeft className="text-2xl" /> </div>
                      <div className="w-1/2 p-6 bg-buttonColor rounded-3xl flex justify-center items-center"> <FiChevronRight className="text-2xl text-textOrange"/> </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
