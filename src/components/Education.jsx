import { education } from "../data/portfolioData";

export default function Education() {
    return (
        <section id="education" className="section-padding">
            <div className="container">
                <div className="section-heading">
                    <span>My learning journey</span>
                    <h2>Education</h2>
                </div>

                <div className="education-list">
                    {education.map((item) => (
                        <article className="education-card" key={item.institution}>
                            <span className="accent">{item.duration}</span>
                            <h3>{item.institution}</h3>
                            <p>{item.course}</p>
                            <p className="muted">{item.result}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}