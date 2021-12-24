import "../styles/Testimonials.css"
import ClientImage from "../assets/AOG.jpg"

function Testimonials() {
    return(
        <>
        <div className="section">
            <div className="container testimonials-container">
                <h2>Client Testimonials</h2>
                <p>"Fantastic work, and blew my Expectations out of the water!"</p>
                <div className="client-container">
                    <img alt="Client Profile" className="client-image" src={ClientImage} />
                    <p><a href="https://twitter.com/EsportsAog">Armor Of God Esports</a></p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Testimonials;