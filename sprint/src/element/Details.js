import React from 'react';
import './Details.css'; 
import { Link } from 'react-router-dom'
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

const Detalhes = () => {
    return (
        <div>
            <header>
                <div className="container header-container">
                    <div className="logo">
                        <Link to="/"><img src={Logo} alt="Logo Formula E" width="100px" height="100px" /></Link>
                    </div>
                    <h1>Formula E - Watch Points</h1>
                    <Link to="/"><button className="home-button">Home</button></Link> {/* Navegação interna usando Link */}
                </div>
            </header>

            <section className="content">
                <div className="container">
                    <h2>Comparação dos problemas para a solução</h2>
                    <p>
                        Como o problema apresentado é a falta de audiência e pouca visibilidade da Formula E, desenvolvemos uma
                        solução que possa atrair telespectadores para as corridas e assim possibilitar os mesmos a se interessar
                        mais.
                    </p>
                    <p>
                        Nosso esquema de pontos por minutagem faria com que os telespectadores assistissem as transmissões ao vivo e
                        despertassem interesse pela corrida e pelas recompensas.
                    </p>
                    <p>
                        Trazendo mais público interessado pelas recompensas também traria audiência para as transmissões e
                        consequentemente mais visibilidade para a Formula E.
                    </p>

                    <h3>Exemplos de recompensas:</h3>
                    <div className="rewards-grid">
                        <div className="reward-item">
                            <img src={imagen123} alt="Boné" />
                        </div>
                        <div className="reward-item">
                            <img src={imagen1234} alt="Moletom" />
                        </div>
                        <div className="reward-item">
                            <img src={imagen12345} alt="Garrafa" />
                        </div>
                        <div className="reward-item">
                            <img src={imagen123456} alt="Mochila" />
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <div className="container footer-container">
                    <div className="tech-mahindra">
                        <img src={tech} alt="logotech" />
                    </div>
                    <div className="email">
                        <h4>Contatos: algumemailexistente@gmail.com</h4>
                        <p>+55-XXXXXXX-XXXX</p>
                    </div>
                    <div className="social-media">
                        <img src={linkedin}alt="linkedin" />
                        <img src={facebook} alt="facebook" />
                        <img src={instagram} alt="instagram" />
                        <img src={twitter} alt="twitter" />
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Detalhes;


