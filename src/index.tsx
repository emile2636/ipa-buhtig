import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import Repos from "./Pages/Repos";
import Gists from "./Pages/Gists";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/repos",
    element: <Repos />,
  },
  {
    path: "/gists",
    element: <Gists />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
