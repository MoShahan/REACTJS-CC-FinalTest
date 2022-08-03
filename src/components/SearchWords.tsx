import { Button, Paper } from "@mui/material";
import React, { useState } from "react";
import { WordType } from "../pages/User";
import WordDetails from "./WordDetails";

type SearchWordsProps = {
  words: Array<WordType>;
};

const SearchWords = ({ words }: SearchWordsProps) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [currWordDetails, setCurrWordDetails] = useState<any>();
  //   console.log("SearchWords has been rendered");
  //   console.log(words);

  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "500px",
        margin: "auto",
        padding: "10px 50px",
      }}
      elevation={10}
    >
      {!showDetails ? (
        <div>
          {words?.map((word: any, index: any) => (
            <div key={index}>
              <h1>{word.word}</h1>
              <h3>{word?.meanings[0]?.definitions[0].definition}</h3>
              <Button
                variant="contained"
                onClick={(e) => {
                  setShowDetails(true);
                  setCurrWordDetails(word);
                }}
              >
                More Details
              </Button>
              <hr />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <WordDetails displayWord={currWordDetails} />
        </div>
      )}
    </Paper>
  );
};

export default SearchWords;
