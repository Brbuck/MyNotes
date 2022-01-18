import React, { useState, useEffect } from 'react';
import './styles.scss'

import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom'

function DeleteNotes() {
    const { id } = useParams()
    let navigate = useNavigate()

    const [notes, setNotes] = useState('')

    useEffect(() => {
        axios.get(`http://localhost:5000/notes/${id}`).then((response) => {setNotes(response.data)});
    }, [])

    async function deleteNote() {
        try {
            await axios.delete(`http://localhost:5000/notes/${id}`)
            navigate('/')
        } catch (error) {
            console.error(error)
        }
    }

    
    return (
        <div className='contente-delete'>
            <div>
                <h1>{notes.title}</h1>
                <span>{notes.description}</span>
                <span>are you sure?</span>
                <button onClick={deleteNote}>Delete</button>
                <Link to='/'>Cancel</Link>
            </div>
        </div>
    );
}

export default DeleteNotes;
