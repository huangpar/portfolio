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
            </header>
            <main>
                {/* <Link to="/portfolio">Back to Portfolio</Link> */}
                <div className='data-viz'>
                    <h1>Data Visualization</h1>
                    <p className='viz'>An interactive trellis chart showcasing temperature and precipitation trends from various cities.</p>
                    <img src="/imgs/weather-viz.png" className="score"/>
                    <p className='viz'>Precipitation levels are represented on the y-axis through the scatter points, while temperature is indicated by the color of those points, with red denoting the highest average temperatures on record and blue representing the lowest. You can view the exact date and temperature of a point by hovering over it. This multi-layered approach allows users to not only explore precipitation patterns but also correlate them with temperature trends throughout the year. For example, one could investigate whether certain cities experience higher rainfall during periods of extreme heat or cold, or identify months with anomalous precipitation levels relative to the typical temperature range.</p>
                    <p className='viz'>The combination of precipitation and temperature data within the same visualization facilitates a more holistic understanding of weather dynamics.</p> 
                    <p className='viz'>Users can ask analytical questions that bridge both variables, such as how precipitation intensity varies with temperature shifts, or how geographic location influences the relationship between rainfall and heat/cold extremes. From a communicative standpoint, this design effectively conveys the intricate interplay between precipitation and temperature, two crucial factors that shape a region's overall climate and weather patterns. By consolidating this information into a single interactive interface, the visualization becomes a powerful tool for not only exploring individual variables but also uncovering insights into their complex interdependencies across different cities and seasons.</p>
                </div>
            </main>
        </div>
    )
}