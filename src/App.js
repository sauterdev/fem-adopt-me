const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      animal: "dog",
      name: "luna",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      animal: "toad",
      name: "bumps",
      breed: "American Toad",
    }),
    React.createElement(Pet, {
      animal: "fish",
      name: "Cutie",

      breed: "Siamese Fighting Fish",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
