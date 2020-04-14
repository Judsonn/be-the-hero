import React from 'react'
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css'

export default function NewIncident(){
    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <h1 className="h1"> Novo Cadastro</h1>

                    <p className="p">
                        Descreva o caso detalhadamente para encontrar um herói para resolver isso.
                    </p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={20} color="#7B73EC" />
                            Voltar para home
                    </Link>

                </section>



                <form>
                    <input placeholder="Título do caso" />
                    <textarea placeholder ="Descrção" />
                    <input placeholder="Valor em reais" />

                <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}