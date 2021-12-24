import "../styles/WorkPage.css"
import ReactPlayer from "react-player";

import Video1 from "../assets/Landing Page Video.mp4";
import Video2 from "../assets/Video 2.mp4";
import Video3 from "../assets/Video 3.mp4";
import Video4 from "../assets/Video 4.mp4";

function WorkPage() {
    return(
        <>
        <div className="section">
            <div className="container work-container">
                <h1>Work</h1>
                <div className="videos-container">
                    <ReactPlayer className="video-player" url={Video1} controls="true" light="true" />
                    <ReactPlayer className="video-player" url={Video2} controls="true" light="true" />
                    <ReactPlayer className="video-player" url={Video3} controls="true" light="true" />
                    <ReactPlayer className="video-player" url={Video4} controls="true" light="true" />
                </div>
            </div>
        </div>
        </>
    );
}

export default WorkPage;