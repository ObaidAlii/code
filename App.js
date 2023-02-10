import React from "react";
import ReactDOM from "react-dom/client";

// const headingHtml = document.createElement("h1");

// headingHtml.innerHTML = "Namaste from JavaScript";

// const root = document.getElementById("root");

// root.appendChild(headingHtml);

const heading1 = React.createElement(
  "h1",
  {
    id: "heading1",
  },
  "Hello EveryOne from Parcel"
);
const heading2 = React.createElement(
  "h2",
  {
    id: "heading2",
  },
  "Hello EveryOne from React2"
);
console.log(heading1);

const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(container);
