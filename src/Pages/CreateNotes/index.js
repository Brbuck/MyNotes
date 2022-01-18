import React from 'react';
import axios from 'axios';
import './styles.scss'
import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'

import { useForm } from "react-hook-form";


function CreateNotes() {
    let navigate = useNavigate()

    const { register, handleSubmit } = useForm();

    async function postNotes({ title, description, date }) {
        try {
            await axios.post('http://localhost:5000/notes', {
                title, description, date
            })
            navigate('/')

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <form onSubmit={handleSubmit(postNotes)} className='form'>
            <div >
                <input {...register("title")} placeholder='Title' />
                <textarea type="text" {...register("description")} placeholder='notes...' />
                <input type='date' {...register("data")} />
                <button type="submit">Enviar</button>
                <Link to='/'> &#8592; voltar</Link>
            </div>
        </form>
    );
}

export default CreateNotes;