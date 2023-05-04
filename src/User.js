import { Link, useLocation } from 'react-router-dom';
import React from 'react';
const User = () => {
    const location = useLocation();
    console.log(location?.state?.data?.name);
    return (
        <div>
            <div className="mpage">
                <div className="mbox">
                    <div className="navbar">
                        <div className="bone"><h1>Portfolio!</h1></div>
                        <div className="btwo">
                            <ul>
                                <li className='one'> <span><Link style={{ color: "white", textDecoration: "none" }} to="#" >Home</Link></span></li>
                                <li className='one'><Link className='text-white text-decoration-none' to="/About" >About</Link></li>
                                <li className='one'><Link className='text-white text-decoration-none three' to="/service">Skills</Link></li>
                                <li className='one'><Link className='text-white text-decoration-none four' to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="backimg">
                        <div className="cont">
                            <h1>Hi, I'am Prashant Nain</h1>
                            <h2>Reactjs Developer</h2>
                            <p>Hello,Myself Prashant nain basically,I am from Shamli (Uttar-Pradesh:-251301).</p>
                            <p>I have done my graduation in Bachelor of Computer Applications [BCA (2022-2023)] on Shri Ram Group of College.</p>
                            <p>I have done six months of internship in Reactjs on CETPA INFOTECH SOLUTIONS pvt.ltd(Noida).</p>
                            <p></p>
                        </div>
            
                        <div className="btn">
                            {/* <button>Let's Talk</button> */}
                            <Link to="/"> <button>Let's Talk</button></Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}
export default User;