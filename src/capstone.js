import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

export function Capstone() {
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
                <div className="nintendo">
                    <h1>What You Got Left?</h1>
                    {/* <p>"What you got Left?" is a web-app that aims to reduce food paste allowing users to keep track of the ingredients they have and generate recipes based off of those ingedients.</p> */}
                    <img src="/imgs/home.png" alt="what you got left - home" className="score"/>
                    <p>In the US, young adults ages 18 to 24, waste more food than any other age group (Nikolaus et al., 2018); this stems from many factors including lack of ideas for cooking and time due to busy academic, work and social schedules. What You Got Left? is an interactive website aimed to tackle food waste at an individual level. Users can input and share ingredients, track expiration dates, and generate diverse recipes. Through our recipe inventory and generation features, we hope to bring awareness to the ingredients we have at our disposal to eat healthier, reduce waste, and live sustainably. </p>
                    <div className="container">
                        <div className="row row-cols-1 row-cols-md-2">
                            <div className="col">
                                <img src="/imgs/my_fridge.png" alt="my fridge" className="score"/>
                            </div>
                            <div className="col">
                                <img src="/imgs/recipe_gen_1.png"  alt="recipe generator"className="score"/>
                            </div>
                        </div>
                        <div className="row row-cols-1 row-cols-md-2">
                            <div className="col">
                                <p>My main role on this project was as a front-end developer. The team I worked on this project with also consisted of a project manager, and product designer, and two other developers. For my part of the project I utalized javascript and React to build some of the pages of the app. In addition to the development I did I also conducted literature reviews, user research and user testing to identify key pain points and preferences of our target audience.</p>
                            </div>
                            <div className="col">
                                <img src="/imgs/recipe_gen_2.png" alt="recipe generator" className="score"/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}