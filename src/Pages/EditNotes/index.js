import React, { useState, useEffect } from 'react';
import './styles.scss'
import axios from 'axios';

import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { useForm } from "react-hook-form";


function Editar() {
    const { id } = useParams()
    let navigate = useNavigate()

    const { register, handleSubmit } = useForm();

    async function editNotes({ title, description }) {
        await axios.patch(`http://localhost:5000/notes/${id}`, {
            title, description
        })
        navigate('/')
    }

    const [posts, setPosts] = useState('')

    useEffect(() => {
        fetch(`http://localhost:5000/notes/${id}`).then((response) => (response.json())).then(data => { setPosts(data) });
    }, [])

    return (
        <div>
            <form onSubmit={handleSubmit(editNotes)} className="form">
                <div className='content-editnotes'>
                    <input {...register("title")} placeholder='title' />
                    <textarea type="text" {...register("description")} placeholder='title' value={posts.description} onChange={(e => setPosts(e.target.value))} />
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
    );
}

export default Editar;