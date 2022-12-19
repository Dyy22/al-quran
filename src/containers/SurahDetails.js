import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { LangContext } from "../App";
import Navbar from "../components/Navbar";
import ScrollTop from "../components/ScrollTop";
import VerseCards from "../components/VerseCards";

export default function SurahDetails() {
  const [surah, setSurah] = useState(null);
  const params = useParams();
  const context = useContext(LangContext);

  useEffect(() => {
    fetch(`http://129.150.34.32/quran/surah/${params.id}`)
      .then((result) => result.json())
      .then((result) => {
        setSurah(result.data);
      });
  }, []);

  return (
    <section id="details" className="relative">
      <Navbar
        name={surah && surah.name.transliteration[context.lang]}
        details
      />

      <div className="container mx-auto">
        <div
          id="info"
          className="font-balsamiq gap-5 my-12 lg:my-20 grid place-content-center"
        >
          <h1 className="drop-shadow-xl order-3 mx-auto text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            {surah && surah.number === 1
              ? "أَعُوْذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِِْ"
              : "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ"}
          </h1>
        </div>

        <div id="verse-cards" className="grid gap-3 my-3">
          {surah &&
            surah.verses.map((el) => (
              <VerseCards key={el.number.inQuran} data={el} />
            ))}
        </div>
      </div>

      <ScrollTop />
    </section>
  );
}
