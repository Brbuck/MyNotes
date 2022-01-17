import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './styles.scss';

import { AiTwotoneEdit } from "react-icons/ai";
import { RiDeleteBinFill } from "react-icons/ri";

function Home() {
    const [notes, setNotes] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/notes').then((response) => (response.json())).then(data => { setNotes(data) });
    }, [])
    console.log(notes)
    return (
        <div className="container">
            <div className="container-header"><h1>My notes</h1>
                <Link to='create_notes'>New Note</Link>
            </div>
            <div className="container-notes">
                {
                    notes.map((item, index) => (
                        <div>
                            <div className='container-content' key={index}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                            <div className='footer'>
                                <span>{item.data}</span>
                                <div className='menus'>
                                    <Link to={`/notes/${item.id}`}><AiTwotoneEdit /></Link>
                                    <Link to={`/delete/${item.id}`}><RiDeleteBinFill /></Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Home;
