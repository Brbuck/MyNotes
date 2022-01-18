import React from 'react';
import './styles.scss'

import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../Schema'


function CreateNotes() {
    let navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

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
            <div>
                <div>
                    <input {...register("title")} placeholder='Title' autoFocus />
                    <p className='errors'>{errors.title?.message}</p>
                </div>
                <div>
                    <textarea type="text" {...register("description")} placeholder='notes...' />
                    <p className='errors' >{errors.description?.message}</p>
                </div>
                <div>
                    <input type='date' className='date' {...register("date")} />
                    <p className='errors' >{errors.date?.message}</p>
                </div>
                <button type="submit">Enviar</button>
                <Link to='/'> &#8592; back</Link>
            </div>
        </form>
    );
}

export default CreateNotes;