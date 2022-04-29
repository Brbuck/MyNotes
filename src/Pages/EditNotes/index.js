import React, { useState, useEffect } from 'react';
import '../CreateNotes/styles.scss'
/* ---- */
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../Schema'

function Editar() {
    const { id } = useParams()
    let navigate = useNavigate()

    const [posts, setPosts] = useState('')

    useEffect(() => {
        fetch(`http://localhost:5000/notes/${id}`).then((response) => (response.json())).then(data => { setPosts(data) });
    }, [id])

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

    async function editNotes({ title, description, date }) {
        await axios.patch(`http://localhost:5000/notes/${id}`, {
            title, description, date
        })
        navigate('/')
    }

    return (
        <div>
            <form onSubmit={handleSubmit(editNotes)} className="form">
                <div>
                    <div>
                        <input type="text" {...register("title")} placeholder='title' defaultValue={posts.title} autoFocus />
                        <p className='errors'>{errors.title?.message}</p>
                    </div>
                    <div>
                        <textarea type="text" {...register("description")} placeholder='title' defaultValue={posts.description} />
                        <p className='errors' >{errors.description?.message}</p>
                    </div>
                    <div>
                        <input type='date' className='date' {...register("date")} defaultValue={posts.date} />
                        <p className='errors' >{errors.date?.message}</p>
                    </div>
                    <button type="submit">Enviar</button>
                    <Link to='/'> &#8592; back</Link>
                </div>
            </form>
        </div>
    );
}

export default Editar;