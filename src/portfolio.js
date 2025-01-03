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
            </header>
            <main>
                <div className="container-fluid">
                    <h1><strong>My Portfolio</strong></h1> 
                    <div className="row row-cols-1 row-cols-md-2 g-3">
                        <div className="col p-5">
                            <Link className="link-underline link-underline-opacity-0" to="/amplus" >
                                <div className="card text-center h-100">
                                    <img src="/imgs/scorecard-1.png" className="card-img-top"/>
                                    <div className="card-body"> 
                                        <h3 className="card-title">Data Performance Visualization</h3>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col p-5">
                            <Link className="link-underline link-underline-opacity-0" to="/weather">
                                <div className="card text-center h-100">
                                    <img src="/imgs/weather-viz.png" className="card-img-top"/>
                                    <div className="card-body">
                                        <h3 className="card-title">Data Visualization</h3>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col p-5">
                            <Link className="link-underline link-underline-opacity-0" to="/nintendo">
                                <div className="card text-center h-100">
                                    <img src="/imgs/erd.png" className="card-img-top"/>
                                    <div className="card-body">
                                        <h3 className="card-title">Nintendo Database Design</h3>
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