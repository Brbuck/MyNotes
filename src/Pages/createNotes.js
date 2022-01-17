import React from 'react';
import axios from 'axios';

import {useNavigate} from 'react-router-dom'

import { useForm } from "react-hook-form";


function CreateNotes() {
    let navigate = useNavigate()

    const { register, handleSubmit } = useForm();

    async function postNotes({title, description, data}) {
        await axios.post('http://localhost:5000/notes', {
            title, description, data
        })
        
        navigate('/')
    }
    return (
        <form onSubmit={handleSubmit(postNotes)}>
            <input {...register("title")} placeholder='tiele' />
            <textarea type="text" {...register("description")} placeholder='title' />
            <input type='date' {...register("data")} placeholder='tiele' />
            <button type="submit">Enviar</button>
        </form>
    );
}

export default CreateNotes;