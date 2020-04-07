import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';
import {FiLogIn} from 'react-icons/fi'

// import herosImg from '../../assets/heros.jpg'

export default function logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <form>
                    <h1>
                        Faça seu Login
                       <input placeholder= "Sua ID " />
                        <button className= "button "type="submit"> Entrar</button>


                        <Link to="/register">
                            <FiLogIn size={20} color="#ffff" />
                            Não tenho cadastro
                        </Link>
                    </h1>
                </form>
            </section>
            {/* <img src={herosImg} alt="Heros" /> */}
        </div>
    );
} 