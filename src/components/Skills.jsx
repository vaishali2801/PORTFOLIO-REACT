import { skills } from "../data/portfolioData";

export default function Skills() {
    return (
        <section id="skills" className="section-padding">
            <div className="container">
                <div className="section-heading">
                    <span>My technical toolkit</span>
                    <h2>Skills</h2>
                </div>

                <div className="row g-3">
                    {skills.map((skill) => (
                        <div className="col-6 col-md-4 col-lg-3" key={skill}>
                            <div className="skill-card">
                                <span className="skill-dot" />
                                {skill}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}