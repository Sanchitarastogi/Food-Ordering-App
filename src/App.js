import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { Card } from "./components/Card";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Search />
      <Card />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
