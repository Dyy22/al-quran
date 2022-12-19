import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import kaligrafi from "../images/kaligrafi.png";
import SurahCard from "../components/SurahCard";
import { LangContext } from "../App";
import ScrollTop from "../components/ScrollTop";

export default function SurahList() {
  const [surahList, setSurahList] = useState([]);
  const context = useContext(LangContext);

  useEffect(() => {
    fetch("https://sutanlab-quran-api.vercel.app/surah")
      .then((result) => result.json())
      .then((result) => setSurahList(result.data));
  }, []);

  return (
    <section id="home" className="relative">
      <Navbar />
      <section id="kaligrafi" className="p-10 mt-5">
        <img
          className="drop-shadow-xl mx-auto"
          src={kaligrafi}
          alt="kaligrafi"
        />
      </section>

      <section id="surah-list" className="container mx-auto">
        <h1 className="font-balsamiq font-bold text-4xl text-green-4 text-center my-16">
          {context.lang === "id" ? "Daftar Surah" : "List of Surah"}
        </h1>
        <div
          id="surah-cards"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 my-5"
        >
          {surahList.map((surah) => (
            <SurahCard key={surah.number} data={surah} />
          ))}
        </div>
      </section>

      <ScrollTop />
    </section>
  );
}
