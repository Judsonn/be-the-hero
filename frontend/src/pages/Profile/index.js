import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi'


import './styles.css';

export default function Profile() {
    return (
        <div className="profile-container">

            <header>
                <span>Bem Vinda APAD</span>


                <Link className="button" to="incidents/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={30} color="#7B73EC " />
                </button>
            </header>
        


       
            <h1> Casos cadastrados</h1>

            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso test</p>

                    <strong>Descrição:</strong>
                    <p>descrição test</p>

                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>CASO:</strong>
                    <p>Caso test</p>

                    <strong>Descrição:</strong>
                    <p>descrição test</p>

                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>CASO:</strong>
                    <p>Caso test</p>

                    <strong>Descrição:</strong>
                    <p>descrição test</p>

                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>CASO:</strong>
                    <p>Caso test</p>

                    <strong>Descrição:</strong>
                    <p>descrição test</p>

                    <strong>Valor:</strong>
                    <p>R$ 120,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

            </ul>
           

        </div>
    );
}