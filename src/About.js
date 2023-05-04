import { Link } from "react-router-dom";
const About=()=>{
    return(
        <div>
              <div className="aboutmain">
                <div className="aboutboxa">
                    <img src="pexels-pixabay-270348.jpg"  />
                </div>
                <div className="aboutboxb">
                    <h1>About Us</h1>
                    <h5>Developer <span>& Designer</span></h5>
                    <p>I am a front-end web developer.I can provide clean code and pixel perfect design.I also make the website more & more interective with web animations.I can provide clean prefect design.i can also make the website more responsive.A responsive design makes your website accessible to the all users,regardless of their device.</p>
                    <Link to="/home"> <button style={{borderRadius:"30px" }}> Go to Home</button></Link>
                </div>
                </div> 
        </div>
    )
}
export default About;