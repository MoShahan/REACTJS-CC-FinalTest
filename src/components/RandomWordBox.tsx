import { Button, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import WordDetails from "./WordDetails";
import axios from "axios";
import { DICTIONARY_API } from "../App";

const RandomWordBox = ({ word, definition }: any) => {
  //   console.log("Random Word ===", word);
  const [showRDetails, setShowRDetails] = useState<boolean>(false);
  const [thisWordDetails, setThisWordDetails] = useState<Array<any>>([]);

  useEffect(() => {
    axios
      .get(DICTIONARY_API + word)
      .then((res: any) => {
        // setLoading(false);
        setThisWordDetails(res.data);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <Paper
      elevation={10}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "500px",
        margin: "auto",
        padding: "10px 50px",
      }}
    >
      {!showRDetails ? (
        <>
          <h1>Word of the Day</h1>
          <h2>Word : {word}</h2>
          <h2>Definition : {definition}</h2>
          <Button onClick={() => setShowRDetails(true)} variant="contained">
            SHOW MORE DETAILS
          </Button>
        </>
      ) : (
        <WordDetails displayWord={thisWordDetails} />
      )}
    </Paper>
  );
};

export default RandomWordBox;
