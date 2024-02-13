import { Link, NavLink } from "react-router-dom";

import Designing from '../../img/Designing.png';
import Vibrant from '../../img/Vibrant.png';
import Days from '../../img/Days.png';
import last from '../../img/last.png';

function WorksPage() {
    return ( 
        <section class="works">
                <div class="container">
                    <div class="works-header">
                        <h1>Works</h1>
                    </div>
                    <div class="works-card-container">
                        <img src={Designing} alt="1"/>
                        <div class="works-card-description">
                            <h3><Link to={'/workDetail'}>Designing Dashboards</Link></h3>
                            <div class="description">
                                <div class="date">2020</div>
                                <div class="tag">Dashboard</div>
                            </div>
                            <p>
                                Amet minim mollit non deserunt ullamco est sit 
                                aliqua dolor do amet sint. Velit officia consequat duis 
                                enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                    </div>
                    <div class="works-card-container">
                        <img src={Vibrant} alt="1"/>
                        <div class="works-card-description">
                            <h3>Vibrant Portraits of 2020</h3>
                            <div class="description">
                                <div class="date">2018</div>
                                <div class="tag">Illustration</div>
                            </div>
                            <p>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor 
                                do amet sint. Velit officia consequat duis enim velit mollit. 
                                Exercitation veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                    </div>
                    <div class="works-card-container">
                        <img src={Days} alt="1"/>
                        <div class="works-card-description">
                            <h3>36 Days of Malayalam type</h3>
                            <div class="description">
                                <div class="date">2018</div>
                                <div class="tag">Typography</div>
                            </div>
                            <p>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor 
                                do amet sint. Velit officia consequat duis enim velit mollit. 
                                Exercitation veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                    </div>

                    <div class="works-card-container">
                        <img src={last} alt="1"/>
                        <div class="works-card-description">
                            <h3>Components</h3>
                            <div class="description">
                                <div class="date">2018</div>
                                <div class="tag">Components, Design</div>
                            </div>
                            <p>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor 
                                do amet sint. Velit officia consequat duis enim velit mollit. 
                                Exercitation veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
     );
}

export default WorksPage;