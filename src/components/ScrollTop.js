import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function ScrollTop() {
  return (
    <div className="sticky bottom-10 container mx-auto pr-5">
      <div
        className="p-3 bg-white drop-shadow-xl rounded-full w-12 h-12 grid place-content-center text-xl text-green-4 ml-auto cursor-pointer hover:animate-bounce"
        onClick={() => window.scrollTo({ top: 0 })}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}
