import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center  w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p>IT'S TIME TO GO TO</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          WIFEY<span className="text-blue-400">SCHOOL</span>
        </h1>
      </div>
      <p className="text-sm md:text-base font-light">
        I hereby acknowledge that I may embark on a journey to attain
        unparalleled{" "}
        <span className="text-blue-400 font-medium">wifey excellence</span> and
        willingly embrace all the adventures and responsibilities that accompany
        it. With a commitment to fostering a{" "}
        <span className="text-blue-400 font-medium">
          harmonious and thriving partnership
        </span>
        , my aim is to create a home filled with love, joy, and a shared sense
        of fulfillment.
      </p>
      <Button
        func={() => {
          window.location.href = "#generate";
        }}
        text={"Let's Begin"}
      ></Button>
    </div>
  );
}
