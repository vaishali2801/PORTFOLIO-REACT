import { portfolio } from "../data/portfolioData.js";

export default function Footer() {
    return (
        <footer className="portfolio-footer">
            <div className="container text-center">
                <a href="#home" className="footer-brand">
                    {portfolio.name}
                </a>
                <p>Designed and developed with React.js</p>
                <p>© {new Date().getFullYear()} {portfolio.name}. All rights reserved.</p>
            </div>
        </footer>
    );
}