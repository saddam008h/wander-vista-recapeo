import React from "react";
import HomePage from "./homepage/HomePage";
import { Header } from "./components";
import { Footer } from "./components";

const App = () => {
  return (
    <div>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
};

export default App;
