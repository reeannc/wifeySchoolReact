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
  const [area, setArea] = useState([]);
  const [reference, setReference] = useState("health_and_fitness");
  const [showModal, setShowModal] = useState(false);

  function handleSetArea(areaGroup) {
    setArea([...area, areaGroup]);
  }

  function toggleModal() {
    setShowModal(!showModal);
  }

  function updateArea(areaGroup) {
    if (reference !== "health_and_fitness") {
      setArea([areaGroup]);
      setShowModal(false);
      return;
    }
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
        description={"Select books to read"}
      />
      <div className="bg-slate-950  border border-solid border-blue-400 rounded-lg flex flex-col">
        <button onClick={toggleModal}>Select Reference</button>
        {showModal && (
          <div>
            {reference === "health_and_fitness"
              ? AREA[reference]
              : Object.keys(AREA[reference]).map(
                  (areaGroup, areaGroupIndex) => (
                    <button
                      onClick={() => {
                        updateArea(areaGroup);
                      }}
                      key={areaGroupIndex}
                    >
                      <p>{areaGroup}</p>
                    </button>
                  )
                )}
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}

//when not health and fitness, return other objects

//general notes: what i did wrong: u copy pasted without understanding if it is the one solving the problem at hand
//take one step at at time, see if it updates
//study on foundations
