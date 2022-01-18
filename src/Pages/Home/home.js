import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './styles.scss';

import { GiNotebook } from "react-icons/gi";
import { AiTwotoneEdit } from "react-icons/ai";
import { RiDeleteBinFill } from "react-icons/ri";

function Home() {
    const [notes, setNotes] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/notes').then((response) => (response.json())).then(data => { setNotes(data) });
    }, [])

    return (
        <div className="container">
            <div className="container-header">
                <div className='title'>
                    <span className='icon'><GiNotebook /></span>
                    <h1>My notes</h1>
                </div>
                <Link to='create_notes'>New Note</Link>
            </div>
            <div className="container-notes">
                {
                    notes.map((item, index) => (
                        <div key={index}>
                            <div className='container-content' >
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                            <div className='footer'>
                                <span>{item.date}</span>
                                <div className='menus'>
                                    <Link title='Edit' to={`/notes/${item.id}`}><AiTwotoneEdit /></Link>
                                    <Link title='Delete' to={`/delete/${item.id}`}><RiDeleteBinFill /></Link>
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
