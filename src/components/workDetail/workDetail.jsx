import work1 from '../../img/work/img-1.png';
import work2 from '../../img/work/img-2.png';
import work3 from '../../img/work/img-3.png';


function WorkDetail() {
    return ( 
        <section className="works work-detailed">
                <div className="container">
                    <div className="works-header section-header">
                        <h2>Designing Dashboards with <br/>usability in mind</h2>
                        <div className="description">
                            <div className="date">2020</div>
                            <div className="tag">Components, Design</div>
                        </div>
                    </div>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                        Velit officia consequat duis enim velit mollit. Exercitation veniam consequat 
                        sunt nostrud amet.
                    </p>
                    <img src={work1} alt="1" className="first-img"/>
                    <h3>Heading 1</h3>
                    <h4>Heading 2</h4>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                        Velit officia consequat duis enim velit mollit. 
                        Exercitation veniam consequat sunt nostrud amet.
                    </p>
                    <img src={work2} alt="2"/>
                    <img src={work3} alt="2"/>
                </div>
        </section>
     );
}

export default WorkDetail;