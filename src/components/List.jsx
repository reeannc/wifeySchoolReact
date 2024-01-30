import React from "react";
import SectionWrapper from "./SectionWrapper";
import Card from "./Card";

export default function List(props) {
  const { list } = props;
  return (
    <SectionWrapper
      id={"list"}
      header={"insights on"}
      title={["Becoming", "the Best", "Wife"]}
    >
      <div className="flex flex-col gap-4">
        {list.map((book, i) => {
          <Card />;
        })}
      </div>
    </SectionWrapper>
  );
}

//do this part
//will it work without changing area to list?

//when polarity is clicked , it's contents should pop up in references
