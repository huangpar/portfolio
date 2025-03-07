import { Link } from 'react-router-dom';
import './style.css';

export function Weather() {
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
                <div className='data-viz'>
                    <h1>Data Visualization</h1>
                    <p className='viz'>This is an interactive trellis chart showcasing temperature and precipitation trends from various cities. The data for this visualization are a collection datasets where each one is a one year weather history for an indivdual city. All of these datasets come form Wunderground. For this project, I conducted a thorough task analysis, hand-sketched multiple drafts of data visualizations, and developed a fully functional, interactive visualization.</p>
                    <img src="/imgs/weather-viz.png" alt="Weather Visualization" className="score"/>
                    <p className='viz'>Precipitation levels are represented on the y-axis through the scatter points, while temperature is indicated by the color of those points, with red denoting the highest average temperatures on record and blue representing the lowest. You can view the exact date and temperature of a point by hovering over it. This multi-layered approach allows users to not only explore precipitation patterns but also correlate them with temperature trends throughout the year. For example, one could investigate whether certain cities experience higher rainfall during periods of extreme heat or cold, or identify months with anomalous precipitation levels relative to the typical temperature range.</p>
                    <p className='viz'>The combination of precipitation and temperature data within the same visualization facilitates a more holistic understanding of weather dynamics.</p> 
                    <p className='viz'>Users can ask analytical questions that bridge both variables, such as how precipitation intensity varies with temperature shifts, or how geographic location influences the relationship between rainfall and heat/cold extremes. From a communicative standpoint, this design effectively conveys the intricate interplay between precipitation and temperature, two crucial factors that shape a region's overall climate and weather patterns. By consolidating this information into a single interactive interface, the visualization becomes a powerful tool for not only exploring individual variables but also uncovering insights into their complex interdependencies across different cities and seasons.</p>
                    <h3>Technology Used</h3>
                    <ul>
                        <li>The <strong>D3</strong> library of <strong>Javacript</strong> was leveraged to create the dynamic visualization</li>
                        <li><strong>Python</strong> and the <strong>Pandas</strong> library were used to consolidate the individual datasets into a single comprehensive dataset</li>
                    </ul>
                </div>
            </main>
        </div>
    )
}