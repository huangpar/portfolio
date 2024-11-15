import { Link } from 'react-router-dom';
import './style.css';

export function Home() {
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

            </main>
        </div>
    )
}