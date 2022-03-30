import { createContext, useState } from "react";
import SurahDetails from "./containers/SurahDetails";
import SurahList from "./containers/SurahList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const LangContext = createContext(null);

export default function App() {
  const [lang, setLang] = useState("id");

  return (
    <Router>
      <LangContext.Provider value={{ lang, setLang }}>
        <Routes>
          <Route path="/" element={<SurahList />} />
          <Route path=":id" element={<SurahDetails />} />
        </Routes>
      </LangContext.Provider>
    </Router>
  );
}

export { LangContext };
