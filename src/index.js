import React from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(<AppRouter />);
