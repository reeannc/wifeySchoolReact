import { useState } from "react";
import React from "react";
import Hero from "./components/Hero";
import Generator from "./components/Generator";
import List from "./components/List";
import { generateWorkout } from "./utils/functions";

function App() {
  const [area, setArea] = useState([]);
  const [reference, setReference] = useState("health_and_fitness");

  function updateListOfReferences() {
    window.location.href = "#list";
    let newWorkout = generateWorkout(reference, area);
    console.log(newWorkout);
    setArea(newWorkout);
  }

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base">
      <Hero />
      <Generator
        area={area}
        setArea={setArea}
        reference={reference}
        setReference={setReference}
        updateListOfReferences={updateListOfReferences}
      />
      <List list={area} />
    </main>
  );
}

export default App;

//add

//conceptualuze website , theme: what to do to be the best wife for your husband (develop queen, lover, matron archetype)
//01. current problem: (put what i need currently) a. health and fitness b. sex and sexuality c. polarity ( fem communication) d. dating & relationships
//02. resources you need to read: add books listed there, highlight when clicked
//3. formulate button

//after formulate: provides links and summary to the resources you clicked

//ask chatgpt what react concpets were learnt per part
