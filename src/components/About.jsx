import { portfolio } from "../data/portfolioData";

export default function About() {
    const interests = [
        {
            icon: "💻",
            title: "Information Technology",
            description:
                "Exploring programming, software development and emerging technologies.",
        },
        {
            icon: "🌐",
            title: "Web Development",
            description:
                "Building responsive and user-friendly web applications.",
        },
        {
            icon: "🤖",
            title: "AI & Innovation",
            description:
                "Learning about artificial intelligence and new technology.",
        },
    ];

    return (
        <section id="about" className="section-padding">
            <div className="container">
                <div className="section-heading">
                    <span>Get to know me</span>
                    <h2>About Me</h2>
                </div>

                <p className="section-description">
                    {portfolio.about}
                </p>

                <div className="row g-4 mt-3">
                    {interests.map((item) => (
                        <div className="col-md-4" key={item.title}>
                            <article className="info-card h-100">
                                <div className="interest-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}