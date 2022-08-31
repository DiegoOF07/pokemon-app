import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { ListPokemon, Pokemon, Home } from "../pages";

export const AppRouting = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path="busca-pokemon" element={<Pokemon />}/>
            <Route path="todos-los-pokemon" element={<ListPokemon />}/>
            <Route path="home" element={<Home/>}/>
            <Route path="*" element={<Navigate to="home"/>}/>
        </Routes>
    </>
  )
}
