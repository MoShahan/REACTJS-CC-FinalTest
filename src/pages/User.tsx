import { Button, CircularProgress, TextField } from "@mui/material";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { DICTIONARY_API, RANDOM_WORD_API } from "../App";
import RandomWordBox from "../components/RandomWordBox";
import SearchWords from "../components/SearchWords";

const User = () => {
  const [word, setWord] = useState<string>("");
  const [wordDef, setWordDef] = useState<string>("");
  const [details, setDetails] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const [searchWord, setSearchWord] = useState<string>("");
  const [isRandomWord, setIsRandomWord] = useState<boolean>(true);
  const [searchResults, setSearchResults] = useState<Array<any>>([]);

  useEffect(() => {
    axios
      .get(RANDOM_WORD_API)
      .then((res: any) => {
        console.log(res);
        setWord(res.data[0].word);
        setWordDef(res.data[0].definition);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        console.error(e);
      });
  }, []);

  const handleSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      setIsRandomWord(false);
      setLoading(true);
      axios
        .get(DICTIONARY_API + searchWord)
        .then((res: any) => {
          setLoading(false);
          setSearchResults(res.data);
        })
        .catch((e) => console.error(e));
    },
    [searchWord]
  );

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <TextField
          autoFocus
          placeholder="Enter Keyword"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
        />
        <Button
          sx={{ transform: "scale(1.5)" }}
          type="submit"
          variant="contained"
        >
          SEARCH
        </Button>
      </form>
      <hr />
      {loading ? (
        <CircularProgress />
      ) : isRandomWord ? (
        <div>
          <RandomWordBox
            word={word}
            // onClick={getMoreDetails}
            definition={wordDef}
          />
        </div>
      ) : (
        <div>
          <SearchWords words={searchResults} />
        </div>
      )}
      <hr />
    </div>
  );
};

export default User;
