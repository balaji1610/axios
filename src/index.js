import React from "react";
import { createRoot } from "react-dom/client";

import Axios from "./services/Axios";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Axios />);
