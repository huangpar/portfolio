import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

export function Tokenyo() {
    return (
        <div className='stuff'>
            <header>
                <p>Parker Huang</p>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/resume">Resume</Link>
                </nav>
                <div className="hamburger-menu">
                    <span className="material-symbols-outlined">menu</span>
                    <div className="content">
                        <Link to="/">Home</Link>
                        <Link to="/portfolio">Portfolio</Link>
                        <Link to="/resume">Resume</Link>
                    </div>
                </div>
            </header>
            <main>
                <div className="nintendo">
                    <h1>Tokenyo</h1>
                    <img src="/imgs/tokenyo-home.png" className="score"/>
                    <p></p>
                    <div className="container">
                        <div className="row row-cols-1 row-cols-md-2">
                            <div className="col">
                                <img src="/imgs/login.png" className="score"/>
                            </div>
                            <div className="col">
                                <img src="/imgs/cart.png" className="score"/>
                            </div>
                        </div>
                    </div>
                    <p></p>
                </div>
            </main>
        </div>
    )
}