import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons"
import { Link } from "react-router-dom"

export default function Form() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [job, setJob] = useState('')
    const [message, setMessage] = useState('')
    const [isSent, setIsSent] = useState(false)

    function onFormSubmit(event) {
        event.preventDefault();
        const formData = { name, email, job, message };
        fetch('https://morning-tor-83992-a5d1ca651f10.herokuapp.com/submit-form', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          })
            .then((response) => response.json())
            .then((data) => {
              // Handle the response from the server
              console.log('Server response:', data);
              // Reset the form fields
              setName('');
              setEmail('');
              setJob('')
              setMessage('');
              setIsSent(true)
            })
            .catch((error) => {
              // Handle any errors
              console.error('Error:', error);
            });
        };
    
    return(
        <>
            <div className="contact-container">
                <div className="wrap-contact">
                    {isSent ? 
                    <div className="form-title">
                        <span >Thank you for reaching out!</span>
                        <h3>I Will Reply to You as Soon as Possible!</h3>
                        <Link to="/">
                            <button onClick={()=>setIsSent(false)} className="btn-form">Back to Home</button>
                        </Link>
                    </div>
                     :
                    <form className="validate-form" onSubmit={onFormSubmit}>
                        <span className="form-title">Send Me a Message</span>
                        <div className="wrap-input validate-input">
                            <input required className="input" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name or Company Name"></input>
                            <span className="focus-input"></span>
                        </div>
                        <div className="wrap-input validate-input">
                            <input required className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail"></input>
                            <span className="focus-input"></span>
                        </div>
                        <div className="wrap-input validate-input">
                            <input required className="input" type="text" value={job} onChange={(e) => setJob(e.target.value)} placeholder="Job Description"></input>
                            <span className="focus-input"></span>
                        </div>
                        <div className="wrap-input validate-input">
                            <textarea required className="input" type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your Message"></textarea>
                            <span className="focus-input"></span>
                        </div>
                        <div className="container-btn-form">
                            <button className="btn-form"><span className="btn-icon"><FontAwesomeIcon icon={faPaperPlane} /></span>Send</button>
                        </div>
                    </form>
                    }
                </div>
            </div>
        </>
    )
}