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
                {/* <Link to="/portfolio">Back to Portfolio</Link> */}
                <h1>Data Performance Visualization</h1>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2">
                        <div className='col'>
                            <img src="/imgs/scorecard-1.png" className="score"/>
                        </div>
                        <div className='col'>
                            <p>Freelance graphic project design for Amplus Group. For this project I conceptualized and developed a detailed vendor performance scorecard tailored to the company’s needs. The scorecard was designed to include editable fields for EQC scores and visualized month-to-month performance trends, making it both functional and user-friendly. This project required ongoing communication and collaboration with key stakeholders at Amplus Group to ensure the design aligned with their branding, expectations, and operational requirements. Adobe Illustrator was leveraged to create a visually engaging and professional layout, while Adobe Acrobat was used to incorporate dynamic, editable features, ensuring ease of use and adaptability for future updates. The final product was well-received, demonstrating both technical proficiency and an ability to deliver on client objectives within set timelines. </p>
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