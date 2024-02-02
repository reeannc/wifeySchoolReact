import React from "react";

export default function Card({ areaGroup, link }) {
  return (
    <div>
      <h3 className="chose">You chose {areaGroup} to study.</h3>
      <p>
        click here for a summary: <br />
        <a
          href={link[0]}
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          {link[0]}
        </a>
      </p>
    </div>
  );
}

//when area clicked, automatically opens select reference modal
