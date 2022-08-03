import { Paper } from "@mui/material";
import React from "react";
import ReactAudioPlayer from "react-audio-player";

const WordDetails = ({ displayWord }: any) => {
  // console.log(displayWord);

  return (
    <div>
      <Paper
        elevation={10}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "50%",
          margin: "0 auto",
          bgcolor: "lightblue",
        }}
      >
        <h3> {displayWord.word} </h3>
        <h3> {displayWord.phonetic} </h3>
      </Paper>
      <Paper
        elevation={10}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          // width: "500px",
          margin: "auto",
          padding: "5px 5px",
          marginTop: "20px",
        }}
      >
        {displayWord?.meanings.map((meaning: any, index: number) => (
          <div key={index}>
            <h3>{meaning.partOfSpeech}</h3>
            {meaning.definitions.map((definition: any, i: number) => (
              <div key={index + i}>
                <hr />
                <h5>{definition.definition}</h5>
                <h5>Eg: {definition.example}</h5>
              </div>
            ))}
          </div>
        ))}
      </Paper>
      <Paper
        elevation={10}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          // width: "500px",
          margin: "auto",
          padding: "10px 50px",
          marginTop: "20px",
        }}
      >
        <ReactAudioPlayer
          src={displayWord?.phonetics[0].audio}
          autoPlay
          controls
        />
      </Paper>
    </div>
  );
};

export default WordDetails;
