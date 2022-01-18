import React, { useState, useEffect } from 'react';
import './styles.scss'

import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios';


function DeleteNotes() {
    const { id } = useParams()
    let navigate = useNavigate()

    async function deleteNote() {
        try {
            await axios.delete(`http://localhost:5000/notes/${id}`)
            navigate('/')
        } catch (error) {
            console.error(error)
        }
    }

    const [notes, setNotes] = useState('')


    useEffect(() => {
        fetch(`http://localhost:5000/notes/${id}`).then((response) => (response.json())).then(data => { setNotes(data) });
    }, [])
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
