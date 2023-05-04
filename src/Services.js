import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const Services = () => {
    return (
        <div>
            <div className="sermain">
                <div className="our">
                    <h1>MY-SKill,s</h1>
                </div>
                <div className="bootmain">
                <div className="boot">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                    
                            src="https://www.igeeksblog.com/wp-content/uploads/2021/03/Best-HTML-Editor-Apps-for-iPhone-and-iPad.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>HTML</h3>
                            <p>Hyper Text Markup Language</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://blog.logrocket.com/wp-content/uploads/2020/07/CSS-3png.png"    
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            {/* <h3>CSS</h3> */}
                            <p>Cascading Style Sheet</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i1.wp.com/www.techcoffees.com/wp-content/uploads/2018/02/bootstrap-wallpaper.png?fit=1366%2C768&ssl=1"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Bootstrap</h3>
                            <p>
                                This is a Framework
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://jess2.github.io/images/react.png"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>React</h3>
                            <p>
                                This is a Library
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://wallpapercave.com/wp/wp2465927.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Javascript</h3>
        
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://th.bing.com/th/id/R.dac47b213e4081b6c85a33abf4caf000?rik=ougQ1JFwc3ue2Q&riu=http%3a%2f%2fwesterngirl154.weebly.com%2fuploads%2f1%2f2%2f4%2f8%2f124810590%2f858745300.PNG&ehk=PRqDOhUvVbiFLQPHLmuySwd38pwlOPPM6RyKhIrGGeU%3d&risl=&pid=ImgRaw&r=0"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>PHOTOSHOP</h3>
        
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.pinimg.com/originals/7c/3c/33/7c3c338c21f7ab3868b02e8355e9789e.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>GIT</h3>
                            <p>
                                Global Information Tracker
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>


                

            </div>
        </div>
        <div className="bootb">
        <Link to="/home"> <Button variant="primary">Go to Home</Button></Link>
        </div>
        </div>
        </div>
    )
}
export default Services;