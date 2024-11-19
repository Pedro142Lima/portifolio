import React from "react";
import './index.scss'
import limao from '../../img/images-removebg-preview 1.svg'
import email from '../../img/email.svg'
import github from '../../img/github.svg'
import insta from '../../img/insta.svg'
import linkedin from '../../img/linkedin.svg'
import zap from '../../img/zap.svg'
export default function LandPage() {
    return (
        <div className="main">
            <header>

                <a className="bt-header" href="">Sobre</a>

                <a className="bt-header" href="">Portifólio</a>

            </header>

            <div className="container-1">

                <div className="txt">
                <h2 className="h2-frase">Como o limão vira limonada, nós transformamos sua ideia,</h2>
                <h2 className="h2-frase"> em um site de sucesso.</h2>
                </div>
                
                <img className="limao" src={limao} alt="" />

            </div>

            <div className="container-2">

                <div className="container-alinhamento">

              
                    <div className="sobre-mim">
                    
                    <h3 className="h3-sobre">Sobre mim</h3>
                        <p className="p-sobre">Sou Pedro, desenvolvedor full-stack dedicado a criar soluções digitais impactantes. Atuo no front-end e back-end para trazer ideias à vida de forma integrada. </p>

                    </div>

                    <div className="contato">
                        <h3 className="h3-contato">Contato:</h3>

                        <div className="icones">
                            <div className="icone">
                                <a className="a-icone" href="">
                                    <img className="img-icon" src={linkedin} alt="" />
                                    <p>Linkedin</p>
                                </a>
                            </div>

                            <div className="icone">
                                <a className="a-icone" href="">
                                    <img className="img-icon" src={github} alt="" />
                                    <p>Github</p>
                                </a>
                            </div>

                            <div className="icone">
                                <a className="a-icone" href="">
                                    <img className="img-icon" src={insta} alt="" />
                                    <p>Instagram</p>
                                </a>
                            </div>
                        </div>


                        <div className="email-fone">

                            <div className="conteudo">
                                <img src={email} alt="" />
                                <p>pedroeinviller142gmail.com</p>
                            </div>

                            <div className="conteudo">
                                <img src={zap} alt="" />
                                <p>55+ 11 91297-8834</p>
                            </div>

                        </div>
                    </div>


                </div>

            </div>

            <div className="container-3">


                <h1>Portifólio</h1>

                <div className="faixa">
                    <h3>Projeto desenvolvido para uma lanchonete.</h3>
                </div>

                <div className="projeto">

                    <div className="box"></div>
                    <a href="">
                        <img src="" alt="" />
                        <p>Github</p>
                    </a>

                </div>

                <div className="faixa">
                    <h3>Projeto desenvolvido para uma clinica.</h3>
                </div>

                <div className="projeto">

                    <div className="box"></div>
                    <a href="">
                        <img src="" alt="" />
                        <p>Github</p>
                    </a>

                </div>
            </div>
        </div>
    )
}