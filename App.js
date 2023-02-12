import React from "react";
import ReactDOM from "react-dom/client";

//Creation using React.createElement

/* const heading1 = React.createElement(
  "h1",
  {
    id: "heading1",
    key: "h1",
  },
  "Hello from Heading 1"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "heading2",
    key: "h2",
  },
  "Hello from Heading 2"
);
console.log(heading1);

const heading3 = React.createElement(
  "h3",
  {
    id: "heading3",
    key: "h3",
  },
  "Hello from Heading 3"
);

const container = React.createElement("div", { className: "title" }, [
  heading1,
  heading2,
  heading3,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);

*/

//-------END----------//

//Creation using JSX

/*
const title = (
  <div className="title">
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(title);
*/

//Creation using functional component AND Passing Attributes AND Composition of compoents (adding component inside another component)

/*
const headingOne = <h1>Heading 1 from functional component</h1>;

const HeadingTwo = () => {
  return <h2>Heading 2 from functional component</h2>;
};

const HeadingComponent = () => {
  return (
    <div className="title">
      {headingOne}
      {<HeadingTwo />}
      <h3>Heading 3 from functional component</h3>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);

*/

// Creating a Header Component from scratch with LOGO on left, search bar, User icon

const Header = () => {
  return (
    <div className="header-main">
      <img className="logo" width="100px" height="100px" src=".\src\logo.png" />
      <input className="search-field" type="text" placeholder="Search.." />
      <i className="fas fa-user-alt"></i>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);
