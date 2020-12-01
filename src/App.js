import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: "Titulo 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis mi non sapien condimentum porta. Aliquam mattis velit at egestas malesuada.",
  },
  {
    title: "Titulo 2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis mi non sapien condimentum porta. Aliquam mattis velit at egestas malesuada.",
  },
  {
    title: "Titulo 3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis mi non sapien condimentum porta. Aliquam mattis velit at egestas malesuada.",
  },
];

const options = [
  {
    label: "Red",
    value: "red",
  },
  {
    label: "Green",
    value: "green",
  },
  {
    label: "Blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      </Route>
    </div>
  );
};

export default App;
