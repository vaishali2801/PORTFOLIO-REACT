import { projects } from "../data/portfolioData.js";

export default function Projects() {
    return (
        <section id="projects" className="section-padding">
            <div className="container">
                <div className="section-heading">
                    <span>Things I've built</span>
                    <h2>Featured Projects</h2>
                </div>

                <div className="row g-4">
                    {projects.map((project) => (
                        <div className="col-md-6 col-lg-4" key={project.title}>
                            <article className="project-card h-100">
                                <div className="project-number">PROJECT</div>

                                <h3>{project.title}</h3>
                                <p>{project.description}</p>

                                <div className="d-flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech) => (
                                        <span className="tech-tag" key={tech}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="project-links mt-auto">
                                    <a href={project.demo} target="_blank" rel="noreferrer">
                                        Live Demo ↗
                                    </a>
                                    <a href={project.github} target="_blank" rel="noreferrer">
                                        Source Code ↗
                                    </a>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}