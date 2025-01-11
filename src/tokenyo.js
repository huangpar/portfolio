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
                        <img src="/imgs/tokenyo-home.png" className="score"/>
                        <p>Tokenyo is an online boutique marketplace that offers a diverse range of clothing and merchandise from multiple brands, catering to a wide audience with unique and stylish options. My role encompassed managing and maintaining the website, ensuring its functionality, seamless navigation, and an exceptional user experience. The platform operates on Shopify, where I handled updates, integrations, and overall performance to meet customer needs effectively. Additionally, I was responsible for designing all the graphics for BRNY and Zodies branded items, ensuring each design was visually appealing and aligned with the brand's identity. I utilized Adobe Illustrator to craft these high-quality graphics, which included intricate details and creative elements that elevated the product offerings. To streamline production, printing, and shipping, I collaborated with SPOD, a reliable print-on-demand company, enabling efficient fulfillment and delivery to customers. My contributions supported both the operational and creative aspects of Tokenyo's growth and success.</p>
                        <div className="row row-cols-1 row-cols-md-2">
                            <div className="col">
                                <img src="/imgs/login.png" className="score"/>
                            </div>
                            <div className="col">
                                <img src="/imgs/cart.png" className="score"/>
                            </div>
                        </div>
                        <p>Tokenyo can be accessed here: <a href="https://tokenyo.com" target="_blank">http://tokenyo.com</a></p>
                    </div>
                    <p></p>
                </div>
            </main>
        </div>
    )
}