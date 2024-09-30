import React from 'react';
import './Home.css';
import Logo from '../element/imagens/image-removebg-preview.png';
import twitter  from '../element/imagens/twitter.png'
import facebook from '../element/imagens/facebook.png'
import instagram from'../element/imagens/instagram.png'
import linkedin from'../element/imagens/linkedin.png'
import tech from '../element/imagens/Screenshot_23.png'


const Casa = () => {
    return (
        <div>
<head>
    <title>Fórmula E - Watch Points</title>
</head>
<body>
    <header class="header">
        <div class="container">
            <div class="logo">
                <img src={Logo} alt="Logo Fórmula E" width="100px" height="100px"/>
            </div>
            <h1>Fórmula E - Watch Points</h1>
            <div class="auth-buttons">
                <button class="login-btn">Login</button>
                <button class="signup-btn">Sign up</button>
            </div>
        </div>
    </header>

    <nav class="navigation">
        <div class="container">
            <ul>
            <li><a href="/rewards">Recompensas</a></li>
            <li><a href="/news">Notícias</a></li>
            <li><a href="/details">Detalhes</a></li>
            </ul>
        </div>
    </nav>

    <main class="main-content container">
        <section class="video-section">
            <div class="video-container">Video Principal</div>
            <div class="replays">Replays</div>
            <div class="tabela">Tabela</div>
        </section>

        <section class="sobre-pontos">
            <h2>Sobre os pontos</h2>
            <p>
                Nosso sistema acumula pontos com base na frequência de visualização de vídeos da temporada de Fórmula E. 
                Os pontos podem ser trocados por recompensas exclusivas em nossa loja.
            </p>
        </section>
    </main>
    <footer>
                <div className="tech-mahindra">
                    <img src={tech} alt="logotech" width="100px" height="100px"/>
                </div>
                <div className="email">
                    <h4>Contatos: algumemailexistente@gmail.com<br/>+55-XXXXXXX-XXXX</h4>
                </div>
                <div className="social-media">
                    <img src={linkedin} alt="LinkedIn" width="50px" height="50px"/>
                    <img src={facebook} alt="Facebook" width="50px" height="50px"/>
                    <img src={instagram} alt="Instagram" width="50px" height="50px"/>
                    <img src={twitter} alt="Twitter" width="50px" height="50px"/>
                </div>
            </footer>

</body>
<html/>
        </div>
    );
};

export default Casa;


