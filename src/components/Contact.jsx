import { portfolio } from "../data/portfolioData.js";

export default function Contact() {
    return (
        <section id="contact" className="section-padding">
            <div className="container">
                <div className="section-heading">
                    <span>Let's connect</span>
                    <h2>Contact Me</h2>
                </div>

                <div className="contact-card text-center">
                    <p>
                        Have a project idea or an opportunity to discuss?
                        I'd love to hear from you.
                    </p>

                    <a
                        className="btn btn-accent mt-3"
                        href={`mailto:${portfolio.email}`}
                    >
                        Send Me an Email ↗
                    </a>

                    <div className="social-links justify-content-center mt-4">
                        <a href={portfolio.github} target="_blank" rel="noreferrer">
                            GitHub
                        </a>
                        <a href={portfolio.linkedin} target="_blank" rel="noreferrer">
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}