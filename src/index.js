import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";

ReactDOM.render(
  <BrowserRouter>
    <ChakraProvider>
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/contacts/:id" exact element={<Contact />} />
      </Routes>
    </ChakraProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
