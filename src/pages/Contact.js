import "../styles/Contact.css";

function Contact() {
  return (
    <>
      <div className="section">
        <div className="container contact-container">
          <div>
            <h1>Let's get in touch.</h1>
            <p>Fill out this form with any questions or for a quote.</p>
          </div>
          <form className="contact-form" method="POST" netlify>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" placeholder="Name" />
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="example@email.com" />
              <label htmlFor="message">Message</label>
              <textarea name="message" placeholder="Message" />
              <button type="submit" className="button">Send</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
