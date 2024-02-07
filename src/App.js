import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MasterLayout from "./Components/masterPage/MasterLayout";
import Contact from "./Components/Contact/Contact.jsx";
import Portfolio from "./Components/Portfolio/Portfolio.jsx";
import About from "./Components/About/About.jsx";
import Home from "./Components/Home/Home.jsx";

const BrowserRouter = createBrowserRouter([
  {
    path: "",
    element: <MasterLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={BrowserRouter} />
    </>
  );
}
