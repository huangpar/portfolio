import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

export function DressDestress() {
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
                    <h1>Dress & Destress</h1>
                    <img src="/imgs/d&d-home.png" className="score"/>
                    <p>The overconsumption of fast fashion by Gen Z consumers in the United States, fueled by the rise in popularity of brands like Shein, H&M, and Forever 21, significantly contributes to the profound ecological damage caused by the industry. Fast fashion relies on cheap manufacturing, frequent consumption, and short-lived garment use, resulting in over 92 million tonnes of waste produced annually and 79 trillion liters of water consumed by the fashion industry alone (Niinimäki et al., 2020). These massive numbers are difficult to visualize, but in comparison to the rest of the world, the fashion industry produces 8-10% of global CO2 emissions, is responsible for approximately 20% of industrial water pollution from textile treatment and dyeing, contributes about 35% of oceanic primary microplastic pollution, due to the vast quantities of textile waste they generate, much of which ends up in landfills or is burned, including unsold products (United Nations Climate Change, 2018).</p>
                    <p>The environmental impact of this trend is profound. The extensive waste, water consumption, and pollution caused by fast fashion affect ecosystems and contribute significantly to climate change. The disposable culture promoted by these brands exacerbates the problem, creating a cycle of overproduction and overconsumption that harms the environment and depletes natural resources. Gen Z consumers must be made aware of these impacts and offered alternatives to these well-known fast-fashion brands to ensure sustainable consumption and production patterns (United Nations, n.d.). The long-term stability of the fashion industry relies on abandoning the fast-fashion model. Linked to a decline in overproduction and overconsumption, such transformations require new mindsets to be adopted at both the business and consumer levels (Niinimäki et al., 2020).</p>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <img src="/imgs/upload.png" className="score"/>
                            </div>
                            <div className="col">
                                <img src="/imgs/comparison.png" className="score"/>
                            </div>
                        </div>
                    </div>
                    <p>Dress & Destress is a web application designed to help users reduce their fashion footprint. Users can upload details of their past or prospective fashion purchases, and we will provide recommendations for similar garments from more sustainable brands. The app offers comprehensive information about each endorsed sustainable brand, along with data visualizations comparing their sustainability metrics to those of the user's original brands.</p>
                    <p>Dress & Destress features a fashion feed where users can post or forward recommendations they like. This feed displays other users' recommendations and highlights how frequently a particular sustainable brand or garment is recommended. By fostering a community of like-minded individuals, Dress & Destress encourages users to adopt sustainable fashion choices and move away from fast fashion trends.</p>
                    <p>For this project, firebase was used to host the website and store all of the data for each item that is shared to the feed page and React and javascript were used to build the web app. My role on this project was a fullstack developer. I worked on this project with three other people, a project manager, product designer, and another fullstack developer. Everyone on the team for this project was involved in every phase of this project from planning to development. For my specific part of the development, I built the upload page and the comparison page shown below. I used the chart.js javascript library for data visualizations to create the bar chart on the comparison page. </p>
                </div>
            </main>
        </div>
    )
}