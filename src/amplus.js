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
                <div className="container">
                    <h1>Data Performance Visualization</h1>
                    <div className="row row-cols-1 row-cols-md-2">
                        <div className='col'>
                            <img src="/imgs/scorecard-1.png" alt="scorecard-1" className="score"/>
                        </div>
                        <div className='col'>
                            <h3>Overview</h3>
                            <p>Freelance graphic project design for Amplus Group. For this project I conceptualized and developed a detailed vendor performance scorecard tailored to the company’s needs. The scorecard was designed to include editable fields for EQC scores and visualized month-to-month performance trends, making it both functional and user-friendly. This project required ongoing communication and collaboration with key stakeholders at Amplus Group to ensure the design aligned with their branding, expectations, and operational requirements. The final product was well-received, demonstrating both technical proficiency and an ability to deliver on client objectives within set timelines. </p>
                            <h3>Techology Used</h3>
                            <ul>
                                <li><strong>Adobe Illustrator</strong> was leveraged to create a visually engaging and professional layout</li>
                                <li><strong>Adobe Acrobat</strong> was used to incorporate dynamic, editable features, ensuring ease of use and adaptability for future updates.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                    <div className='col'>
                        <img src="/imgs/scorecard-2.png" alt="scorecard-2" className="score"/>
                    </div>
                    </div>
                </div>
            </main>
        </div>
    )
}