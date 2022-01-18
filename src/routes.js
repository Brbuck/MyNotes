import React from 'react';
import { Route, Routes } from 'react-router-dom'

import Home from './Pages/Home/home'
import CreateNotes from './Pages/CreateNotes'
import Editar from './Pages/EditNotes'
import Delete from './Pages/DeleteNotes'

function AuthRoutes() {


    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create_notes" element={<CreateNotes/>} />
            <Route path="/notes/:id" element={<Editar/>} />
            <Route path="/delete/:id" element={<Delete/>} />
        </Routes>
    );
}

export default AuthRoutes;