import React from "react";
import ReactDOM from "react-dom/client";
import Pet from "./Pet";

const App = () => {
  <div>
    <h1>Adopt Me!</h1>
    <Pet name="Luna" animal="Dog" breed="Havanese" />
    <Pet name="Bumps" animal="Toad" breed="American Toad" />
    <Pet name="Cutie" animal="Fish" breed="Siamese Fighting Fish" />
  </div>;
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
