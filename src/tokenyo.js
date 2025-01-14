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
                    <div className="container">
                        <h1>Tokenyo</h1>
                        <img src="/imgs/tokenyo-home.png" alt="Tokenyo Home" className="score"/>
                        <h3>Project Overview</h3>
                        <p>Tokenyo is an online boutique marketplace that offers a diverse range of clothing and merchandise from multiple brands, catering to a wide audience with unique and stylish options.</p> 
                        <h3>My Role</h3>
                        <p>My role encompassed managing and maintaining the website, ensuring its functionality, seamless navigation, and an exceptional user experience. My contributions supported both the operational and creative aspects of Tokenyo's growth and success.</p>
                        <div className="row row-cols-1 row-cols-md-2">
                            <div className="col">
                                <img src="/imgs/login.png" alt="Tokenyo login" className="score"/>
                            </div>
                            <div className="col">
                                <img src="/imgs/cart.png" alt="Tokenyo cart" className="score"/>
                            </div>
                        </div>
                        <h3>Technology Used</h3>
                        <ul>
                            <li>The platform operates on <strong>Shopify</strong>, which allows me to handle updates, integrations, and overall performance to meet customer needs effectively.</li>
                            <li>I utilized <strong>Adobe Illustrator</strong> to craft high-quality graphics for Zodies and BRNY branded items, which included intricate details and creative elements that elevated the product offerings</li>
                            <li>I collaborated with <strong>SPOD</strong>, a reliable print-on-demand company, to streamline production, printing, and shipping</li>
                        </ul>
                        <p>Tokenyo can be accessed here: <a href="https://tokenyo.com" target="_blank" rel="noreferrer">http://tokenyo.com</a></p>
                    </div>
                    <p></p>
                </div>
            </main>
        </div>
    )
}