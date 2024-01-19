import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { AREA } from "../utils/content";

function Header(props) {
  const { index, title, description } = props;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center gap-2">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400">
          {index}
        </p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto">{description}</p>
    </div>
  );
}

export default function Generator(props) {
  const { area, setArea } = props;

  function handleSetArea(areaGroup) {
    setArea([...area, areaGroup]);
  }
  return (
    <SectionWrapper
      id={"generate"}
      header={"generate your path"}
      title={["It's", "Wifey", "o'clock"]}
    >
      <Header
        index={"01"}
        title={"Choose an area"}
        description={"select an area you wish to develop"}
      />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.keys(AREA).map((type, typeIndex) => (
          <button
            className={
              "bg-slate-950 border  duration-200 px-4 hover:border-blue-600 py-3 rounded-lg "
            }
            onClick={() => {
              handleSetArea([]);
            }}
            key={typeIndex}
          >
            <p className="capitalize">{type.replaceAll("_", " ")}</p>
          </button>
        ))}
      </div>

      <Header
        index={"02"}
        title={"References"}
        description={"Select book to read"}
      />
      <div>
        <button></button>
      </div>
    </SectionWrapper>
  );
}
