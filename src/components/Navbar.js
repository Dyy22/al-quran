import React, { useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAsia } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { LangContext } from "../App";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const context = useContext(LangContext);

  const showDropDown = (event) => {
    event.stopPropagation();
    document.getElementById("nav-drop").classList.toggle("hidden");
  };

  const hideDropDown = () => {
    document.getElementById("nav-drop").classList.add("hidden");
  };

  const getLanguage = (event) => {
    context.setLang(event.target.id);
  };

  useEffect(() => {
    window.onclick = () => hideDropDown();
  }, []);

  const navClass = ["container", "mx-auto", "p-4"];
  navClass.push(
    props.details
      ? ["grid", "grid-cols-3", "place-items-center"]
      : ["flex", "justify-between", "items-center"]
  );

  return (
    <header className="bg-green-4 text-white font-balsamiq shadow-xl sticky top-0 z-10">
      <nav className={navClass.flat().join(" ")}>
        {props.details && (
          <Link to="/" className={props.details && "justify-self-start"}>
            <FontAwesomeIcon icon={faAngleLeft} fontSize="20px" />
          </Link>
        )}
        <h1 className="text-xl md:text-2xl xl:text-3xl font-bold">
          {props.name ? props.name : "Al Quran"}
        </h1>
        <div
          id="language"
          className={`flex text-2xl gap-3 cursor-pointer items-center relative ${
            props.details && "justify-self-end"
          }`}
          onClick={showDropDown}
        >
          <FontAwesomeIcon icon={faEarthAsia} />
          <p className="text-sm mt-[2px] uppercase">{context.lang}</p>
          <div
            id="nav-drop"
            className="absolute top-[50px] hidden text-xl bg-white shadow-xl right-1 text-green-4 divide-y z-10"
          >
            <div
              id="id"
              className="p-5 hover:text-white hover:bg-green-4"
              onClick={getLanguage}
            >
              Indonesian
            </div>
            <div
              id="en"
              className="p-5 hover:text-white hover:bg-green-4"
              onClick={getLanguage}
            >
              English
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
