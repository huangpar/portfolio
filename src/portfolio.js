import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

export function Portfolio() {
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
                <div className="container-fluid custom-container">
                    <h1>My Portfolio</h1> 
                    <div className="row row-cols-1 row-cols-md-2 g-3 ">
                        <div className="col p-3">
                            <Link className="link-underline link-underline-opacity-0" to="/amplus" >
                                <div className="card text-center h-100" style={{width:'100%'}}>
                                    <img src="/imgs/scorecard-1.png" alt="scorecard-1" className="card-img-top"/>
                                    <div className="card-body custom-body"> 
                                        <h3 className="card-title">Data Performance Visualization</h3>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col p-3">
                            <Link className="link-underline link-underline-opacity-0 justify-content-center" to="/weather">
                                <div className="card text-center h-100" style={{width:'100%'}}>
                                    <div className='row align-items-center' style={{height:'100%'}}>
                                        <img src="/imgs/weather-viz.png" alt="weather"className="card-img-top" />
                                    </div>
                                    <div className="card-body custom-body">
                                        <h3 className="card-title">Data Visualization</h3>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-md-2 g-3">
                        <div className="col p-3">
                            <Link className="link-underline link-underline-opacity-0" to="/nintendo">
                                <div className="card text-center h-100" style={{width:'100%'}}>
                                    <img src="/imgs/erd.png" alt="Nintendo ERD" className="card-img-top"/>
                                    <div className="card-body">
                                        <h3 className="card-title">Nintendo Database Design</h3>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col p-3">
                            <Link className="link-underline link-underline-opacity-0" to="/dressdestress">
                                <div className="card text-center h-100" style={{width:'100%'}}>
                                    <img src="/imgs/Dress-Destress-Logo.png" alt="Dress and Destress" className="card-img-top"/>
                                    <div className="card-body">
                                        <h3 className="card-title">Dress & Destress</h3>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-md-2 g-3">
                        <div className="col p-3">
                            <Link className="link-underline link-underline-opacity-0" to="/capstone">
                                <div className="card text-center h-100" style={{width:'100%'}}>
                                    <div>
                                        <img src="/imgs/unnamed.png" alt="What You Got Left" className="card-img-top"/>
                                    </div>
                                    <div className="card-body">
                                        <h3 className="card-title">What You Got Left?</h3>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col p-3">
                            <Link className="link-underline link-underline-opacity-0" to="/tokenyo">
                                <div className="card text-center h-100" style={{width:'100%'}}>
                                    <div>
                                        <img src="/imgs/tokenyo-bug.png" alt="tokenyo" className="card-img-top"/>
                                    </div>
                                    <div className="card-body">
                                        <h3 className="card-title">Tokenyo</h3>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}