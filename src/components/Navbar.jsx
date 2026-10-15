import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        ["Home", "#home"],
        ["About", "#about"],
        ["Skills", "#skills"],
        ["Projects", "#projects"],
        ["Education", "#education"],
        ["Contact", "#contact"],
    ];

    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top portfolio-nav">
            <div className="container">
                <a className="navbar-brand fw-bold" href="#home">
                    Vaishali<span className="accent">.</span>
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
                    <ul className="navbar-nav ms-auto gap-lg-3">
                        {links.map(([label, href]) => (
                            <li className="nav-item" key={href}>
                                <a
                                    className="nav-link"
                                    href={href}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}