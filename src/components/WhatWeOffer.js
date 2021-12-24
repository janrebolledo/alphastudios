import "../styles/WhatWeOffer.css";

function WhatWeOffer() {
  return (
    <>
      <div className="section whatweoffer-section">
        <div className="container whatweoffer-container">
          <h2>What We Offer</h2>
          <div className="cards-container">
            <div className="card">
                <h4>Graphic Design</h4>
                <p>We have a team full of skilled creative graphic design agents that will make your idea reality.</p>
            </div>
            <div className="card">
                <h4>Motion Design</h4>
                <p>We have a motion design team that is ready to make a showreel, introduction videos and logo animations!</p>
            </div>
            <div className="card">
                <h4>Branding Design</h4>
                <p>We have an unbeatable team of branding and logo designers who will give your brand a stunning visual identity that stands out.</p>
            </div>
          </div>
          <a className="button-dark" href="/work">View Our Projects →</a>
        </div>
      </div>
    </>
  );
}

export default WhatWeOffer;
