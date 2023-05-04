import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faSnapchat} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {fasnapchat} from '@fortawesome/free-brands-svg-icons'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
const Contact=()=>{
    return(
        <div className="cmain">
            <div className="anchor">
            <a href="http://www.facebook.com"><FontAwesomeIcon icon={faFacebook}/></a>
            <a href="http://www.instagram.com"><FontAwesomeIcon icon={faInstagram}/></a>
            <a href="http://www.twitter.com"><FontAwesomeIcon icon={faTwitter}/></a>
            <a href="http://www.snapchat.com"><FontAwesomeIcon icon={faSnapchat}/></a>
          </div>
            <h5 style={{marginLeft:"50px"}}>Contact no:- <span>9627594727</span></h5>
            <Link to="/home"> <Button style={{margin:"50px"}} variant="primary">Go to Home</Button></Link>
        </div>
        
    )
}
export default Contact;