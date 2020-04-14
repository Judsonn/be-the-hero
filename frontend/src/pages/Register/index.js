import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'


import './styles.css';

export default function Register() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <h1 className="h1">
                        Cadastro
                    </h1>

                    <p className="p">
                        Faça seu cadastro entre na platraforma e ajude pessoas a encontrar os casos da sua ONG.
                    </p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={20} color="#7B73EC" />
                            Voltar para o login
                    </Link>

                </section>



                <form>
                    <input placeholder="Nome da ONG" />
                    <input type="email" placeholder="E-mail" />
                    <input placeholder="Whatsapp" />

                    <div className="input-group">
                        <input placeholder="Cidade" />
                        <input placeholder="UF"  style = {{width: 40}}/>
                    </div>
                <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}