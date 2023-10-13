import React from "react";
import Image from "next/image";
import phoenix from "../public/images/phoenix.svg";

const InfiniteLoop = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="h-100 mx-auto overflow-hidden relative w-full">
        <div
          className="slide-track animation-scroll flex"
          style={{ width: "calc(250px * 14)" }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7].map((index) => (
            <div key={index} className="slide">
              <Image
                className="w-36 gap-2 text-buttonColor"
                src={phoenix}
                alt="phoenix"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteLoop;
