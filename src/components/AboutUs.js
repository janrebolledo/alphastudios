import "../styles/AboutUs.css"
import Logo from "../assets/logo.png"

function AboutUs() {
    return(
        <>
        <div className="section inverted-colors">
            <div className="container aboutus-container">
                <img alt="Logo" className="aboutus-logo" src={Logo}/>
                <div>
                    <h1>About Us.</h1>
                    <p>BlackoutHQ is a creative design agency that focuses on delivering clients high-quality graphics, motion designs, web development, and much more.</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default AboutUs;