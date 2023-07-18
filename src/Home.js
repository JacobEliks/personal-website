import { Card, CardGroup, Col, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { faCode, faDatabase, faGraduationCap, faSuitcase, faMessage, } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { useState } from "react";


export default function Home() {
    const [imageLoaded,setImageLoaded] = useState(false)

    function handleImageLoad() {
      setImageLoaded(true)
    }
    const cardStyle = {
      minHeight: '900px'
    };
    return (
      
      <>
       
        <div className="white-section">
        {imageLoaded ? 
            <h1>Nice to Meet You!</h1>
            : null}
            {imageLoaded ? 
            <h3>My name is Jacob, I am a <u className="fs-dev"><i>Full Stack developer</i></u></h3>
            : null}
            
            <img onLoad={handleImageLoad} className="fs-img" src="images/fullstack.jpg" alt="Full Stack" />
        </div>
  
        {imageLoaded ? 
        <div className="colored-section about-me">
            <h1>Get to Know Me!</h1>
            <div>
                <img className="profile-img" src="images/IMG-1567.jpg" alt="image"/>
            </div>
            <h5>I am a Computer Science student at Tel Aviv University.
             Ever since I started the degree I was eeger to learn more, and so I began studying Full Stack development and Python programming at home.
              Now, at my final year of my degree, I feel very confident and comfortable with my developing skills and have completed various projects - for my own use and for others.</h5>
        </div>
        : null}

        {imageLoaded ? 
        <div className="white-section">
          <CardGroup className="skills d-flex">
          <Row>
            <Col xs={12} md={4}>
            <Card style={cardStyle}>
              <Card.Body>
                <Card.Title><div className="icon-border"><FontAwesomeIcon className="icon" icon={faDatabase} /></div> Python programmer</Card.Title>
                <hr />
                <Card.Text>
                  <p className="summury">I excel at programming with Python, from creating games and building websites to data analysis.</p>
                  <h6>Libraries:</h6>
                  <p className="examples">Turtle<br />
                    Tkinter<br />
                    Smtplib<br />
                    Beautiful Soup<br />
                    Selenium<br />
                    Pandas<br />
                    Matplotlib<br />
                    NumPy</p>
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>
            <Col xs={12} md={4}>
            <Card style={cardStyle}>
              <Card.Body>
                <Card.Title><div className="icon-border"><FontAwesomeIcon className="icon" icon={faCode} /></div> Full Stack developer</Card.Title>
                <hr />
                <Card.Text>
                  <p className="summury">I have built many web projects with various frameworks and feel confident in my abilities to create web apps.</p>
                  <h6>Langueges I speak:</h6>
                  <p className="examples">
                    HTML5<br />
                    CSS3<br />
                    Python<br />
                    Javascript<br />
                    C</p>
                  <h6>Dev tools:</h6>
                  <p className="examples">Node.js<br />
                    Flask<br />
                    MySQL<br />
                    MongoDB<br />
                    Git<br />
                    Atom<br />
                    Bootstrap<br />
                    React</p>
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>
            <Col xs={12} md={4}>
            <Card style={cardStyle}>
              <Card.Body>
                <Card.Title><div className="icon-border"><FontAwesomeIcon className="icon" icon={faGraduationCap} /></div> Computer Science student</Card.Title>
                <hr />
                <Card.Text>
                <p className="summury">Throughout my years in university, I gained confidence in my abilities as a programmer and a hard worker. This experience improved my determination and work ethic to the point that I'm not shying away from any challenge. I am eager to learn and improve every single day.</p>
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>
            </Row>
          </CardGroup>


          <div class="contact-me">
            <div className="contact-me-container">
              <p class="portfolio-text">Want to see more? Check out my portfolio now!</p>
              <Link to="/portfolio">
                <button  class="portfolio-button"><FontAwesomeIcon className="icon" icon={faSuitcase} /> Portfolio</button>
              </Link>
            </div>
            <div>
              <img className="profile-img" src="images/IMG-1567.jpg" alt="image"/>
            </div>
            <div className="contact-me-container">
              <p class="contact-text">Interested? Feel free to contact me!</p>
              <Link to="/contact">
                <button class="contact-button"><FontAwesomeIcon className="icon" icon={faMessage} /> Contact</button>
              </Link>
            </div>
            
          </div>
        </div>
        : null}
        {imageLoaded ? 
        <footer className="colored-section footer">
          <div className="footer-container">
            <Link target="_blank" to="https://www.instagram.com/jacobeliks/" rel="noopener noreferrer">
              <InstagramIcon fontSize="small" className="footer-icon"/>
            </Link>
            <Link target="_blank" to="https://www.facebook.com/ivik.eliks.3/" rel="noopener noreferrer">
              <FacebookIcon fontSize="small" className="footer-icon"/>
            </Link>
            <Link target="_blank" to="https://www.linkedin.com/in/jacob-eliks-05a97a257/" rel="noopener noreferrer">
              <LinkedInIcon fontSize="small" className="footer-icon"/>
            </Link>
            <Link target="_blank" to="https://github.com/JacobEliks" rel="noopener noreferrer">
              <GitHubIcon fontSize="small" className="footer-icon"/>
            </Link>
            <p>&copy; 2023 Jacob Eliks Website. All rights reserved.</p>
          </div>
        </footer>
        : null}
      </> 
    )
}
