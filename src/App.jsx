import React from "react";
import HashRouterDemo from "./Components/HashRouter";
import MemoryRouterDemo from "./Components/MemoryRouter";
import StaticRouterDemo from "./Components/StaticRouter";

function App() {
  return (
    <div>
      <h1>React Router Types</h1>

      <HashRouterDemo />
      <hr />

      <MemoryRouterDemo />
      <hr />

      <StaticRouterDemo />
    </div>
  );
}

export default App;