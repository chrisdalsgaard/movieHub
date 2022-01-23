import React from "react";
import {
  ClockIcon,
  TagIcon,
  PlayIcon,
  DotsVerticalIcon,
} from "@heroicons/react/outline";

export default function Center() {
  return (
    <div className="flex justify-evenly items-center flex-wrap md:flex-nowrap text-white">
      <div className="w-full">
        {/* Start left */}
        <div className="flex-row space-y-10">
          <div className="flex items-centerfont-light space-x-10">
            <div className="flex flex-row space-x-2 items-center">
              <TagIcon className="w-5 h-5 text-amber-500" />
              <p>DRAMA</p>
              <p>ADVENTURE</p>
            </div>
            <div className="flex flex-row space-x-2 items-center">
              <ClockIcon className="w-5 h-5 text-amber-500" />
              <p>2 Hours 20 Minutes</p>
            </div>
          </div>
          <div>
            <h1 className="font-extrabold text-7xl">First Man</h1>
          </div>
          <div>
            <p className="text-lg font-light">
              A look at the life of the astronaut, Neil Armstrong, and the
              legendary space mission that led him to become the first man to
              walk on the Moon on July 20, 1969.
            </p>
          </div>
          <div className="">
            <button className="border border-white rounded-full flex px-5 py-3 space-x-2 items-center hover:bg-white/80 hover:text-amber-800 hover:scale-105 transition ease-in duration-200 hover:border-none">
              <p>See movie</p>
              <PlayIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Start right */}
      <div className="w-full">
        <div className="absolute top-1/2 right-0">
          <DotsVerticalIcon className="w-10 h-10 text-amber-500" />
        </div>
      </div>
    </div>
  );
}
