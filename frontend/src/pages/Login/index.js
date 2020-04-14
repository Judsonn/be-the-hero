import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { FiLogIn } from 'react-icons/fi'

// import herosImg from '../../assets/heros.jpg'

export default function Login() {
    return (
        <div className="logon-container">
            <section className="form">
                <form>
                    <h1>Faça seu login</h1>

                    <input placeholder="Sua ID " />
                    <button className="button " type="submit"> Entrar</button>


                    <Link className="back-link-login" to="/register">
                        <FiLogIn size={20} color="#7B73EC" />
                            Não tenho cadastro
                        </Link>

                </form>
            </section>
            {/* <img src={herosImg} alt="Heros" /> */}
        </div>
    );

} 