import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Navbar } from '../components';
import { ListPokemon, Pokemon, Home, } from '../pages';

export function AppRouting() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="busca-pokemon" element = {<Pokemon />} />
        <Route path="todos-los-pokemon" element = {<ListPokemon />} />
        <Route path="/" element = {<Home />} />
        <Route path="*" element = {<Navigate to='/' />} />
      </Routes>
    </>
  );
}
