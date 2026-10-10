import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";

function HashRouterDemo() {
  return (
    <HashRouter>
      <div>
        <h2>HashRouter</h2>
        <p>HashRouter uses # in the URL for navigation.</p>

        <Link to="/">Home</Link>{" | "}
        <Link to="/about">About</Link>

        <Routes>
          <Route path="/" element={<h3>Welcome to Home Page</h3>} />
          <Route path="/about" element={<h3>This is About Page</h3>} />
        </Routes>

        <p>Use: Static websites and simple hosting.</p>
      </div>
    </HashRouter>
  );
}

export default HashRouterDemo;