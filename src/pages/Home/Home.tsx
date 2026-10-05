import logoEvent from "../../assets/logo-event.svg"
import bannerEvento1 from "../../assents/banner-1.png"
import bannerEvento2 from "../../assents/banner-2.png"
import bannerEvento3 from "../../assents/banner-3.png"
import visaoImg from "../../assets/visao-img.png"

import "./Home.css"

function Home() {
    return (
        <>
            <header className="home-header">
                <div className="">
                    <img src={logoEvent} alt="logo Event+" />
                    <nav>
                        <a href="#inicio">Home</a>
                        <a href="#eventos">Eventos</a>
                        <a href="#usarios">Usuarios</a>
                        <a href="#contato">Contatos</a>

                    </nav>

                    <button>Entrar</button>
                </div>
            </header>

            <main>
                <section id="inicio" className="home-banner">
                    <img src={bannerEvento1} alt="Banner do evento" />
                </section>

                <section className="home-visao">
                    <div className="home-visao-container">
                        <img src={visaoImg} alt="Pessoas confraternizando" />
                        <div className="home-visao-texto">
                            <h1>Visão</h1>
                            <p>A EventPluis organiza eventos e infos em uma interface direta,
                                facilitando a consulta da agenda e a participação do usuários.</p>
                        </div>
                    </div>
                </section>

                <section id="eventos" className="home-eventos">
                    <div className="título">
                        <h2>Póximos Eventos</h2>
                        <hr />
                    </div>

                    <div className="home-eventos-lista">
                        <article className="home-evento-card">
                            <img src={bannerEvento1} alt="Evento de Tecnologia" />
                            <span>Tecnologia</span>
                            <div className="home-evento-card-info">
                                <h3>Evento de Tecnologia</h3>
                                <p>Conheça novidade e tendências do setor</p>
                                <button type="button">Ver evento</button>
                            </div>
                        </article>

                        <article className="home-evento-card">
                            <img src={bannerEvento1} alt="Workshop de desenvolviemento" />
                            <span>Workshop</span>
                            <h3>Workshop de Desenvolvimento</h3>
                            <p>Pratique desenvolviemento com atividades guiadas.</p>
                            <button type="button">Ver evento</button>
                        </article>

                        <article className="home-evento-card">
                            <img src={bannerEvento1} alt="Meetup de inteligência Artificial" />
                            <span>Meetup</span>
                            <h3>Meetup de IA</h3>
                            <p>Discussões sobre aplicações de inteligência Artificial</p>
                            <button type="button">Ver evento</button>
                        </article>

                    </div>

                </section>

                <section id="contato" className="home-contato">
                    <div className="home-contato-container">
                        <div className="home-contato-titulo">
                            <h2>Contato</h2>
                            <hr />
                        </div>
                        <div className="home-contato-conteudo"></div>
                        <div className="home-conato-texto">
                            <p>Rua Niterói</p>
                            <p>São Caetano do Sul - SP</p>
                        </div>
                    </div>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.6989003491735!2d-46.57329922466824!3d-23.615129178762857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5cec41547543%3A0xeae678a3991812bd!2sR.%20Niter%C3%B3i%2C%20180%20-%20Centro%2C%20S%C3%A3o%20Caetano%20do%20Sul%20-%20SP%2C%2009510-200!5e0!3m2!1spt-BR!2sbr!4v1791222437222!5m2!1spt-BR!2sbr" loading="lazy"></iframe>

                </section>

            </main>
            <footer className="home-footer">
                <p>Escola Senai de informática - 2026</p>
            </footer>

        </>
    );
}

export default Home;