import React from "react";
import {MemoryRouter,Router,Route,Link, Routes} from "react-router-dom";

function MemoryRouterDemo() {
  return (
    <MemoryRouter>
      <div>
        <h2>MemoryRouter</h2>
        <p>MemoryRouter stores navigation history in memory.</p>

        <Link to="/">Home</Link>{" | "}
        <Link to="/about">About</Link>

        <Routes>
          <Route path="/" element={<h3>Welcome to Home Page</h3>} />
          <Route path="/about" element={<h3>This is About Page</h3>} />
        </Routes>

        <p>Use: Testing and applications with controlled navigation.</p>
      </div>
    </MemoryRouter>
  );
}

export default MemoryRouterDemo;