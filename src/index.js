import React from "react";
import CounterApp from "./CounterApp";
import { createRoot } from "react-dom/client";
import "./index.css";

const divRoot = document.querySelector("#root");
const root = createRoot(divRoot);
root.render(<CounterApp value={0} />);
