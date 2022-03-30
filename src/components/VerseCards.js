import React, { useContext, useState } from "react";
import { LangContext } from "../App";
import { faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function VerseCards(props) {
  const context = useContext(LangContext);
  const [isPlay, setIsPlay] = useState(false);

  const play = (event) => {
    let parent = event.target.parentElement;
    if (parent.nodeName !== "DIV") parent = parent.parentElement;
    const audio = parent.querySelector("audio");

    const audios = document.getElementsByTagName("audio");

    for (const el of audios) {
      if (el.currentTime > 0) {
        el.pause();
        el.currentTime = 0;
      }
    }

    setIsPlay(true);

    audio.play();
  };

  const stop = (event) => {
    let parent = event.target.parentElement;
    if (parent.nodeName !== "DIV") parent = parent.parentElement;
    const audio = parent.querySelector("audio");

    setIsPlay(false);

    audio.pause();
    audio.currentTime = 0;
  };

  return (
    <div
      id="verse-card"
      className="bg-white py-6 px-5 rounded-[20px] md:rounded-[50px] md:p-8 shadow-lg font-balsamiq grid gap-5"
    >
      <div
        id={props.data.number.inSurah}
        className="text-3xl sm:text-4xl md:text-5xl leading-normal sm:leading-relaxed md:leading-relaxed border-b-4 border-green-2 font-amiri text-green-4 flex items-center justify-between gap-5 md:gap-10 px-1"
      >
        <FontAwesomeIcon
          icon={isPlay ? faStop : faPlay}
          className="cursor-pointer text-base sm:text-lg md:text-xl lg:text-2xl px-1 "
          onClick={isPlay ? stop : play}
        />
        <audio
          src={props.data.audio.primary}
          onEnded={() => setIsPlay(false)}
          onPause={() => setIsPlay(false)}
        ></audio>
        <p lang="ar" dir="rtl" className="text-justify">
          {props.data.text.arab}
        </p>
      </div>
      <div className="text-xs sm:text-base md:text-lg text-green-4 gap-3 flex items-center">
        <p className="text-sm md:text-lg lg:text-xl font-bold px-1">
          {props.data.number.inSurah}.
        </p>
        <p className="text-justify">{props.data.translation[context.lang]}</p>
      </div>
    </div>
  );
}
