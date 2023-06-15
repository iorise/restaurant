"use client";

import Image from "next/image";


export default function HomePage() {
  return (
    <div className="static">
      <div className="">
        <img
          className="h-screen w-screen"
          src="/images/bg-restaurant.png"
        />
      </div>
      <div className="z-one absolute w-xtraFullLarge  right-52 bottom-0 ">
          <img className="" src="/images/maskot.png" alt="" />
          <img className="skadi cursor-pointer hover:scale-125 transition-all animate-bouncer absolute top-10 w-28 -right-10" src="/images/skadi.png" alt="" />
        </div>
      <div className="content absolute top-1/2 -right-40 bottom-32">
        <div className="card border-8 border-main-secondary rotate-3 shadow-medium">
          <img className="w-fullLarge h-fullLarge blur-xxs" src="/images/rest.png" alt="" />  
        </div>
        <div className="card2 border-8 border-main-secondary rotate-3 shadow-medium z-one">
          <img className="w-fullLarge h-fullLarge blur-xxs" src="/images/rest.png" alt="" />  
        </div>
      </div>
      <div className="sign absolute top-64 left-28 flex flex-col items-center justify-center text-main-fourth text-5xl opacity-90">
        <img src="/images/genshinlogo.png" className="w-large" />
        <p className=" font-sans font-extrabold mt-5">X</p>
        <img src="/images/pizzalogo.png" className="w-semiLarge mt-5"/>
        <p className=" font-sans font-extrabold mt-5">COLLABORATION</p>
      </div>
    </div>
  );
}
