import "../styles/WhatWeOffer.css";

function BrandingKitDownload() {
  return (
    <>
      <div className="section whatweoffer-section">
        <div className="container whatweoffer-container">
          <h2>Download our branding kit!</h2>
          <p>Use our brand in the media!</p>
          <a className="button-dark" href="%PUBLIC_URL%/Blackout Media Kit.zip" download>Download →</a>
        </div>
      </div>
    </>
  );
}

export default BrandingKitDownload;
