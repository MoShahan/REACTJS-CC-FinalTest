import { act, render, screen } from "@testing-library/react";
import axios from "axios";
import User from "../pages/User";
import { randomWord } from "./testingVariables";

jest.mock("axios");

describe("API Calls...", () => {
  test("Random Word - Resolved...", async () => {
    const resolvedPromise = Promise.resolve({ data: [randomWord] });
    axios.get.mockImplementationOnce(() => resolvedPromise);
    render(<User />);
    await act(() => resolvedPromise);
  });

  test("Random Word - Resolved...", async () => {
    const rejectedPromise = Promise.reject({ data: [randomWord] });
    axios.get.mockImplementationOnce(() => rejectedPromise);
    render(<User />);
  });
});
