import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

export function Resume() {
    return (
        <div className="stuff">
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
                <h1>Resume</h1>
                <p className="skills">Organized, collaborative, and punctual problem solver skilled in R, SQL, NoSQL, Python, JavaScript, HTML, CSS, Office, 
                        Adobe Suite, Epic, Figma, Azure DevOps, GitHub, Tableau, Firebase, and Azure AI (Computer vision and nlp).</p>
                <h2><strong>Work Experience</strong></h2>
                <div className='container-fluid custom-container'>
                    <div className="row">
                        <div className='col-md-4'>
                            <h4>Finance and Information Systems Associate</h4>
                        </div>
                        <div className='col col-md-8'>
                            <ul>
                            <li>Performed detailed abstraction of medical records from Centricity for Little Company of Mary Medical Center and migration to Epic for OSF Healthcare, ensuring accuracy and compliance with HIPAA regulations, resulting in a 95% success rate in data transfer.</li> 
                            <li>Abstraction of medical records from Athenahealth</li> 
                            <li>Managed data consolidation using Epic, Centricity, and Athenahealth systems to streamline information retrieval processes for healthcare providers, leading to a 30% improvement in efficiency.</li> 
                            <li>Maintained strict adherence to HIPAA regulations and OSF Healthcare data compliance standards while managing data integrity throughout the abstraction and migration process, guaranteeing patient confidentiality and security.</li> 
                            </ul>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-4'>
                            <h4>Finance and Information Systems Intern</h4>
                        </div>
                        <div className='col col-md-8'>
                            <ul>
                            <li>Performed detailed abstraction of medical records from Centricity for Little Company of Mary Medical Center and migration to Epic for OSF Healthcare, ensuring accuracy and compliance with HIPAA regulations, resulting in a 95% success rate in data transfer.</li> 
                            <li>Managed data consolidation using Epic, Centricity, and Athenahealth systems to streamline information retrieval processes for healthcare providers, leading to a 30% improvement in efficiency.</li> 
                            <li>Maintained strict adherence to HIPAA regulations and OSF Healthcare data compliance standards while managing data integrity throughout the abstraction and migration process, guaranteeing patient confidentiality and security.</li>
                            <li>HIPAA compliance training</li>
                            </ul>
                        </div>
                    </div>
                    <h2><strong>Education</strong></h2>
                    <p className='ed'>University of Washington - Bachelor of Science in Informatics</p>
                    <p className='ed-detail'>Intellectual Foundations of Informatics, Foundational Skills for Data Science, Core Methods in Data Science, Advanced methods in Data Science, Databases and Data Modeling, Database Design and Management, Research Methods, Design Methods, Information Ethics and Policy, Introduction to Computer Programming, Interactive Information Visualization</p>
                    <ul>
                        <li>Utilized both R and Python to complete data science tasks, demonstrating proficiency in machine learning methods and increasing efficiency.</li>
                        <li>Implemented cross-validation techniques and document-term matrix concepts to improve model accuracy, resulting in an increase in predictive capabilities.</li>
                        <li>Selected appropriate methods from the scikit-learn library to develop simple ML algorithms, leading to a reduction in model error rates.</li>
                        <li>Evaluated the impact of utilizing data and data science on diversity, equity, and inclusion values within organizations, leading to the development of a comprehensive strategy to promote inclusivity.​</li>
                        <li>Developed a comprehensive schema with advanced normalization techniques, leading to a reduction in data redundancy and improved query performance.</li>
                        <li>Executed complex SQL queries to analyze data sets, identifying key patterns and trends that informed strategic decision-making processes, resulting in an increase in operational efficiency.</li>
                        <li>Designed and implemented a comprehensive schema, transitioning from Entity-Relationship Diagrams to a logical design and finally to a physical design, resulting in a streamlined database structure.</li>
                        <li>Assessed performance and maintenance tradeoffs among various candidate physical designs, making informed decisions that led to a reduction in database maintenance costs while maintaining optimal query response times.</li>
                    </ul>
                </div>
            </main>
        </div>
    )
}