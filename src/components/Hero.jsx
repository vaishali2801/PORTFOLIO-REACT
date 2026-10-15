import { portfolio } from "../data/portfolioData.js";
import img from "../assets/myphoto.png";

export default function Hero() {
    return (
        <section id="home" className="hero-section">
            <div className="container">
                <div className="row align-items-center gy-5">
                    <div className="col-lg-7">
                        <span className="hero-label">Welcome to my portfolio</span>

                        <p className="hero-intro">Hello, I'm</p>
                        <h1>{portfolio.name}</h1>
                        <h2 className="accent">{portfolio.role}</h2>

                        <p className="hero-description">
                            Passionate about crafting engaging, responsive and
                            user-friendly web interfaces.
                        </p>

                        <div className="d-flex flex-wrap gap-3 mt-4">
                            <a
                                href={portfolio.resume}
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-accent"
                            >
                                View Resume ↗
                            </a>

                            <a href="#projects" className="btn btn-outline-light">
                                View Projects
                            </a>
                        </div>

                        <div className="social-links mt-4">
                            <a href={portfolio.github} target="_blank" rel="noreferrer">
                                GitHub ↗
                            </a>
                            <a href={portfolio.linkedin} target="_blank" rel="noreferrer">
                                LinkedIn ↗
                            </a>
                            <a href={`mailto:${portfolio.email}`}>Email ↗</a>
                        </div>
                    </div>

                    <div className="col-lg-5 text-center">
                        <img
                            src={img}
                            alt="Vaishali Chauhan"
                            className="hero-image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}