import React from 'react';
import { Link } from 'react-router-dom'; // Importando Link do react-router-dom
import './News.css'; 
import Logo from '../element/imagens/image-removebg-preview.png';
import imagem23 from '../element/imagens/image.png';
import imagem234 from '../element/imagens/imagem 2.png';
import imagem2345 from '../element/imagens/imagem3.png';
import imagem23456 from '../element/imagens/imagem 4.png'
import imagem23457 from '../element/imagens/Ayrton-Senna-celebrates-F1-win.webp'
import imagem23458 from '../element/imagens/International-Womens-Day.webp'
import imagem23459 from '../element/imagens/IMG_6571.webp'
import twitter  from '../element/imagens/twitter.png'
import facebook from '../element/imagens/facebook.png'
import instagram from'../element/imagens/instagram.png'
import linkedin from'../element/imagens/linkedin.png'
import tech from '../element/imagens/Screenshot_23.png'


const Noticias = () => {
    return (
        <div>
            <header>
                <div className="logo">
                    <Link to="/"><img src={Logo} alt="Lego" width="100px" height="100px"/></Link>
                </div>
                <h1>Formula E - Watch Points</h1>
                <Link to="/"><button className="home-button">Home</button></Link>
            </header>

            <main>
                <h1 className="titulo">Principais notícias!</h1>

                <div className="carousel">
                    <div className="carousel-container">
                        <img src={imagem23} className="carousel-item" alt="Notícia 1"/>
                        <img src={imagem234} className="carousel-item" alt="Notícia 2"/>
                        <img src={imagem2345} className="carousel-item" alt="Notícia 3"/>
                    </div>
                    <button className="carousel-button prev">&#10094;</button>
                    <button className="carousel-button next">&#10095;</button>
                </div>

                <h3 className="mais">Notícias recentes mais recentes:</h3>

                <div className="news-grid">
                    <div className="news-item">
                        <img src={imagem23456} alt="Notícia 1" width="400px" height="400px"/>
                        <h2>A criação de um circuito de Fórmula E</h2>
                    </div>
                    <div className="news-item">
                        <img src={imagem23457} alt="Notícia 2" width="400px" height="400px"/>
                        <h2>Velocidade do samba: a brilhante herança do automobilismo brasileiro</h2>
                    </div>
                    <div className="news-item">
                        <img src={imagem23458} alt="Notícia 3" width="400px" height="400px"/>
                        <h2>Dia Internacional da Mulher: ouvindo talentos incríveis na Fórmula E</h2>
                    </div>
                    <div className="news-item">
                        <img src={imagem23459} alt="Notícia 4" width="400px" height="400px"/>
                        <h2>Nicki Shields sobre sua jornada no automobilismo e a mudança da narrativa</h2>
                    </div>
                </div>
            </main>
                <br/>  
                <br/>  
                <br/>  
                <br/>  
                <br/>  
                <br/>  
                <br/>  
                <br/>  
                <br/>  
                <br/>  
                <br/>  
                <br/>  
                <br/>  
                <br/> 
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
        </div>
    );
};

export default Noticias;
