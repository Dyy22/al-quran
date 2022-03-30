import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { LangContext } from "../App";

export default function SurahCard(props) {
  const context = useContext(LangContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${props.data.number}`);
  };
  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-[50px] shadow-md p-8 grid grid-cols-2 gap-5 grid-rows-2 font-balsamiq cursor-pointer hover:animate-bounce-2"
    >
      <div id="surah-number">
        <div className="bg-green-4 text-white text-lg w-10 h-10 rounded-full flex justify-center items-center ">
          <p className="mt-[1px]">{props.data.number}</p>
        </div>
      </div>
      <div id="surah-revelation" className="text-right text-xl">
        <p className="text-green-3 mb-1">
          {props.data.revelation[context.lang]}
        </p>
        <p className="text-green-2">
          {props.data.numberOfVerses}{" "}
          {context.lang === "id" ? "Ayat" : "Verses"}
        </p>
      </div>
      <div id="surah-name" className="flex flex-col justify-end">
        <p className="font-bold text-xl xl:text-2xl text-green-4">
          {props.data.name.transliteration[context.lang]}
        </p>
        <p className="text-green-3 ">
          {props.data.name.translation[context.lang]}
        </p>
      </div>
      <div id="surah-arabic" className="grid place-content-end">
        <p
          dir="rtl"
          lang="ar"
          className="text-5xl font-amiri font-bold text-green-4"
        >
          {props.data.name.short}
        </p>
      </div>
    </div>
  );
}
