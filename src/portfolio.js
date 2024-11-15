import { Link } from 'react-router-dom';
import './style.css';

export function Portfolio() {
    return (
        <div>
            <header>
                <h1>Parker Huang</h1>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/resume">Resume</Link>
                </nav>
            </header>
            <main>
            <h1>My Portfolio</h1>
                <div className="portfolio"> 
                    <div className="portfolio-item">
                        <Link to="/amplus">
                            <img src="/imgs/scorecard-1.png"/>
                        </Link>
                        <h3>Data Performance Visualization</h3>
                    </div>
                    <div className="portfolio-item">
                        <Link to="/weather">
                            <img src="/imgs/weather-viz.png"/>
                        </Link>
                        <h3>Data Visualization</h3>
                    </div>
                    <div className="portfolio-item">
                        <Link to="/nintendo">
                            <img src="/imgs/erd.png"/>
                        </Link>
                        <h3>Nintendo Database Design</h3>
                    </div>
                </div>
            </main>
        </div>
    )
}