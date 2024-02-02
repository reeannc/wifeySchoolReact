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
  const {
    area,
    setArea,
    reference,
    setReference,
    updateListOfReferences,
    updateListContent,
  } = props;

  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  function updateArea(areaGroup) {
    if (area.includes(areaGroup)) {
      setArea(area.filter((val) => val !== areaGroup));
      return;
    }
    if (area.length > 1) {
      return;
    }
    updateListOfReferences(areaGroup);
    updateListContent(areaGroup);

    setArea([...area, areaGroup]);
    if (area.length === 1) {
      setShowModal(false);
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
              " bg-inherit border  duration-200 px-4 hover:border-blue-600 py-3 rounded-lg "
            }
            onClick={() => {
              setArea([]);
              setReference(type);
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
      <div className="  border border-solid border-blue-400 rounded-lg flex flex-col">
        <button className={"bg-inherit text-blue-50"} onClick={toggleModal}>
          Select Reference
        </button>

        {showModal && (
          <div className="flex flex-col px-3 pb-3">
            {(reference === "health_and_fitness"
              ? AREA[reference]
              : AREA[reference]
            ).map((areaGroup, areaGroupIndex) => (
              <button
                onClick={() => {
                  updateArea(areaGroup);
                }}
                key={areaGroupIndex}
              >
                <p>{areaGroup.replace(/_/g, " ")}</p>
              </button>
            ))}
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}

//general notes: what i did wrong: u copy pasted without understanding if it is the one solving the problem at hand
//take one step at at time, see if it updates

//ask chatgpt to explain the concept if u find urself staring off into space
