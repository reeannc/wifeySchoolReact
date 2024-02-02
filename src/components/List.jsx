import React from "react";
import SectionWrapper from "./SectionWrapper";
import Card from "./Card";

export default function List(props) {
  const { listContent } = props;

  return (
    <SectionWrapper
      id={"list"}
      header={"insights on"}
      title={["Becoming", "the Best", "Wife"]}
    >
      <div>
        {listContent.map((areaGroup, index) => (
          <Card key={index} areaGroup={areaGroup} />
        ))}
      </div>
    </SectionWrapper>
  );
}
