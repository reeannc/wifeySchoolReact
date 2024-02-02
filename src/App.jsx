import { useState } from "react";
import React from "react";
import Hero from "./components/Hero";
import Generator from "./components/Generator";
import List from "./components/List";

function App() {
  const [area, setArea] = useState([]);
  const [reference, setReference] = useState("health_and_fitness");
  const [listContent, setListContent] = useState([]);

  function updateListOfReferences(areaGroup) {
    window.location.href = "#list";

    setListContent([areaGroup]);
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
        updateListContent={setListContent}
      />
      <List listContent={area} />
    </main>
  );
}

export default App;

//ask chatgpt what react concpets were learnt per part

//add highlight class to selected modal
