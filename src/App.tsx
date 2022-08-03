import React from "react";
import "./App.css";
import User from "./pages/User";

export const RANDOM_WORD_API = "https://random-words-api.vercel.app/word";
export const DICTIONARY_API =
  "https://api.dictionaryapi.dev/api/v2/entries/en/";

function App() {
  console.log("App has Rendered");

  return (
    <>
      <User />
    </>
  );
}

export default App;
