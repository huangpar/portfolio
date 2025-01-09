import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

export function Nintendo() {
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
                <div className="nintendo">
                    <h1>Nintendo Database Design</h1>
                    <img src="/imgs/nintendo.png" className="score"/>
                    <p>This Nintendo database project is focused on the creation of a comprehensive database for the Nintendo store. This project involved the organization and optimization of the store's inventory, customer information, content reviews, and sales data to ensure efficient and effective business operations. This database design allows for streamlined access to crucial information, improving the overall functionality of the Nintendo store.</p>
                    <img src="/imgs/erd.png" className="score"/>
                    <p>I collaborated with a team of three others on this project, where we designed and implemented an Entity-Relationship Diagram (ERD) for the database. Together, we developed and integrated features such as check constraints, computed columns, and stored procedures to enhance functionality. The database was populated with realistic sample data to simulate real-world scenarios.</p>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <img src="/imgs/check-constraint-1.png" className="score"/>
                            </div>
                            <div className="col">
                                <img src="/imgs/check-constraint-2.png" className="score"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <img src="/imgs/computed-columns.png" className="score"/>
                            </div>
                            <div className="col">
                                <img src="/imgs/stored-procedures.png" className="score"/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}