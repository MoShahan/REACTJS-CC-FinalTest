import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import User from "../pages/User";
import WordDetails from "../components/WordDetails";
import SearchWords from "../components/SearchWords";
import ReactDOM from "react-dom/client";
import RandomWordBox from "../components/RandomWordBox";
import axios from "axios";
import { displayWordProps, randomProps, searchWordsProps } from "./testingVariables";
import App from "../App";

describe("Rendering All Components...", () => {
  test("App...", () => {
    render(<App />);
  });

  test("User...", () => {
    render(<User />);
  });

  test("WordDetails...", () => {
    render(<WordDetails displayWord={displayWordProps} />);
  });

  test("SearchWords...", () => {
    render(<SearchWords words={searchWordsProps} />);
  });

  test("RandomWordBox...", () => {
    render(
      <RandomWordBox
        word={randomProps.word}
        definition={randomProps.definition}
      />
    );
  });
});

describe("Button Clicks...", () => {
  test("Search Button...", () => {
    render(<User />);
    const searchBtn = screen.getByText("SEARCH");
    fireEvent.click(searchBtn);
  });

  // test("Details Button...", () => {
  //   render(<WordDetails displayWord={displayWordProps} />);
  //   const detailsBtn = screen.getByText("More Details");
  //   fireEvent.click(detailsBtn);
  // });
});

describe("Input Elements...", () => {
  test("Search Input", () => {
    render(<User />);
    const inpt = screen.getByPlaceholderText("Enter Keyword");
    fireEvent.change(inpt, { target: { value: "word" } });
  });
});

describe("Snapshot Testing...", () => {
  test("App Component...", () => {
    const { AppComp } = render(<App />);
    expect(AppComp).toMatchSnapshot();
  });
});

// test("Rendering Index.tsx file...", () => {
//   const rootDiv = document.createElement("div");
//   rootDiv.id = "root";
//   document.body.appendChild(rootDiv);
//   require("./index.tsx");
// });
