import React from 'react';
import { Link } from 'react-router-dom'; // Importando Link do react-router-dom
import './Rewards.css';
import Logo from '../element/imagens/image-removebg-preview.png';
import imagen123 from '../element/imagens/701229414001_pp_01_formulaenewera.jpg';
import imagen1234 from '../element/imagens/701223399002_pp_01_FormulaES9.jpg';
import imagen12345 from '../element/imagens/701223602001_pp_01_FormulaES9.jpg';
import imagen123456 from '../element/imagens/701223600001_pp_01_FormulaES9.jpg';
import twitter  from '../element/imagens/twitter.png'
import facebook from '../element/imagens/facebook.png'
import instagram from'../element/imagens/instagram.png'
import linkedin from'../element/imagens/linkedin.png'
import tech from '../element/imagens/Screenshot_23.png'


const Recompensas = () => {
    return (
        <div>
            <header>
                <div className="logo">
                    <Link to="/"><img src={Logo} alt="Logo" width="100px" height="100px" /></Link>
                </div>
                <h1>Formula E - Watch Points</h1>
                <Link to="/"><button className="home-button">Home</button></Link>
            </header>

            <nav>
                <ul>
                    <li><a href="#">Bonés</a></li>
                    <li><a href="#">Camisas</a></li>
                    <li><a href="#">Calças</a></li>
                    <li><a href="#">Outros</a></li>
                </ul>
            </nav>

            <section className="content">
                <h2 className="rewards-title">Recompensas Disponíveis</h2>
                <div className="rewards-grid">
                    <div className="reward-item">
                        <h3>Boné Formula-E</h3>
                        <img src={imagen123} alt="Boné" />
                        <h3>10000 - Pontos</h3>
                        <button className="comprar-btn">Comprar</button>
                    </div>
                    <div className="reward-item">
                        <h3>Moletom Formula-E</h3>
                        <img src={imagen1234} alt="Moletom" />
                        <h3>50000 - Pontos</h3>
                        <button className="comprar-btn">Comprar</button>
                    </div>
                    <div className="reward-item">
                        <h3>Garrafa gradiente Formula-E</h3>
                        <img src={imagen12345} alt="Garrafa" />
                        <h3>1000 - Pontos</h3>
                        <button className="comprar-btn">Comprar</button>
                    </div>
                    <div className="reward-item">
                        <h3>Mochila espaçosa Formula-E</h3>
                        <img src={imagen123456} alt="Mochila" />
                        <h3>45000 - Pontos</h3>
                        <button className="comprar-btn">Comprar</button>
                    </div>
                </div>
            </section>

            <footer>
                <div className="tech-mahindra">
                    <img src={tech} alt="logotech" width="100px" height="100px" />
                </div>
                <div className="email">
                    <h4>Contatos: algumemailexistente@gmail.com<br />+55-XXXXXXX-XXXX</h4>
                </div>
                <div className="social-media">
                    <img src={linkedin} alt="LinkedIn" width="50px" height="50px" />
                    <img src={facebook} alt="Facebook" width="50px" height="50px" />
                    <img src={instagram} alt="Instagram" width="50px" height="50px" />
                    <img src={twitter} alt="Twitter" width="50px" height="50px" />
                </div>
            </footer>
        </div>
    );
};

export default Recompensas;

