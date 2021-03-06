import React, { useState, useEffect } from 'react';
import './style.css';
import api from './services/api';

function Livro() {
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        api.get('books',{}).then(response => {
            setLivros(response.data);
        });
    }, []);

    return (
        <div>
            <h1>Livros</h1>
            <ul>
                {
                    livros.map(livro => (
                        <li>
                            <p>Id: {livro.id}</p>
                            <p>Nome: {livro.nome}</p>
                            <p>editora: {livro.editora}</p>
                            <p>isbn: {livro.isbn}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Livro;