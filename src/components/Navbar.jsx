import { Routes, Route, Link } from "react-router-dom";

;

export const Navbar = () => {

  return (
    <>
      <header className="navbar">

          <Link to="/" className="logo">Pokepedia</Link>
          <div className="nav-content">

              <Link to="/busca-pokemon"  className="nav-item">¡Buscalo!</Link>
              <Link to="/todos-los-pokemon"  className="nav-item">Todos</Link>

          </div>
      </header>
    </>

  )
}
