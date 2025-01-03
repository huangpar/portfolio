import { Link } from 'react-router-dom';
import './style.css';

export function Home() {
    return (
        <div >
            <header>
                <p>Parker Huang</p>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/resume">Resume</Link>
                </nav>
            </header>
            <main>
                <div className="about">
                <h1>About</h1>
                    <p> Hi, I’m Parker Huang – an inquisitive and highly motivated Finance and Information Systems professional with a passion for blending data analytics and technology to create impactful solutions. With a strong foundation in data visualization, machine learning, and software development, I specialize in extracting insights from complex datasets and transforming them into actionable strategies. My expertise spans a diverse toolkit, including R, SQL, Python, Tableau, and Azure AI, as well as front-end and back-end development with JavaScript, HTML, CSS, and Firebase.</p>
                    <p>During my time at Knowtion Health Amplus Group, I honed my skills in data abstraction, system integration, and HIPAA-compliant data management, achieving measurable improvements in operational efficiency and accuracy. I thrive on solving problems and driving innovation, whether I’m streamlining healthcare data migration, designing e-commerce platforms, or crafting user-friendly web apps.</p>
                </div>
            </main>
        </div>
    )
}