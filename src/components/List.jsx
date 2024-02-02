import React from "react";
import SectionWrapper from "./SectionWrapper";
import Card from "./Card";
import { LINK } from "../utils/content";

export default function List(props) {
  const { listContent } = props;

  return (
    <SectionWrapper
      id={"list"}
      header={"insights on"}
      title={["Becoming", "the Best", "Wife"]}
    >
      <div>
        {listContent.map((areaGroup, index) => {
          const formattedAreaGroup = areaGroup.replace(/_/g, " ");
          return (
            <Card
              key={index}
              areaGroup={formattedAreaGroup}
              link={LINK[areaGroup]}
            />
          );
        })}
      </div>
    </SectionWrapper>
  );
}
