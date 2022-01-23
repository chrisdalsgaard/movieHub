import Image from "next/image";
import React from "react";
import Nav from "./Nav";

export default function Header() {
  return (
    <div className="flex bg-gradient-to-b from-purple-600/20 to-transparent  px-20 py-10 items-center justify-between flex-wrap">
      <div className="text-white font-bold text-lg w-36 h-20 relative">
        <Image
          className="text-white"
          src={"/universal.png"}
          alt="Universal logo"
          layout="fill"
        />
      </div>
      <div>
        <Nav />
      </div>
    </div>
  );
}
