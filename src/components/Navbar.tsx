import React from "react";
import { Link } from "react-router-dom";

;

export function Navbar() {

  return (
    <>
      <header className="navbar">

          <Link to="/" className="logo"><img src="https://cdn-icons-png.flaticon.com/512/528/528101.png" width={'55px'}/></Link>
          <div className="nav-content">

              <Link to="/busca-pokemon"  className="nav-item">¡Buscalo!</Link>
              <Link to="/todos-los-pokemon"  className="nav-item">Todos</Link>

          </div>
      </header>
    </>

  )
}
