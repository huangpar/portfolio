import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

export function Amplus() {
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
                {/* <Link to="/portfolio">Back to Portfolio</Link> */}
                <h1>Data Performance Visualization</h1>
                <div className="container">
                    <div className="row">
                        <div className='col'>
                            <img src="/imgs/scorecard-1.png" className="score"/>
                        </div>
                        <div className='col'>
                            <p>Freelance graphic design for Amplus Group. Created a vendor performance scorecard that included fields for EQC score and month to month performance trend.</p>
                        </div>
                    </div>
                    <div className="row">
                    <div className='col'>
                        <img src="/imgs/scorecard-2.png" className="score"/>
                    </div>
                    </div>
                </div>
            </main>
        </div>
    )
}