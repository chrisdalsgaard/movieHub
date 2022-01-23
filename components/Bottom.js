import Image from "next/image";
import React from "react";
import Cast from "./Cast";

export default function Bottom() {
  return (
    <div className="flex text-white justify-evenly items-center">
      <div className="w-full">
        <Cast />
      </div>
      <div className="w-full">
        <div className="flex justify-end mx-10 space-x-20 items-center">
          <div className="flex flex-col">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <Image
                  className="shadow-xl"
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
                  }
                  layout="fill"
                />
              </div>
              <p className="font-light">IMDB</p>
            </div>
            <div>
              <p className="font-extralight text-7xl text-center">8.0</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <Image
                  className="shadow-xl"
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
                  }
                  layout="fill"
                />
              </div>
              <p className="font-light">IMDB</p>
            </div>
            <div>
              <p className="font-extralight text-7xl text-center">75%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
