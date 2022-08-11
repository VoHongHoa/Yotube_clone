import "./Homepage.scss";
import { useNavigate } from "react-router-dom";
function Homepage() {
  let navigate = useNavigate();
  const handleSelectVideo = () => {
    navigate("/video/12");
  };

  return (
    <div className="videos-container">
      <div class="row grid-container">
        <div class="col-3 grid-item mb-3 mt-3">
          <div
            className="video-image"
            onClick={() => handleSelectVideo()}
          ></div>
          <div className="video-information mt-2">
            <div className="row">
              <div className="channel-image col-2">
                <div className="image"></div>
              </div>
              <div className="information col-10">
                <span className="video-title">Video test</span>
                <span className="channel-name">Tên channel</span>
                <span className="video-detail">2N views - 1 hours ago</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3 grid-item mb-3 mt-3">
          <div className="video-image"></div>
          <div className="video-information mt-2">
            <div className="row">
              <div className="channel-image col-2">
                <div className="image"></div>
              </div>
              <div className="information col-10">
                <span className="video-title">Video test</span>
                <span className="channel-name">Tên channel</span>
                <span className="video-detail">2N views - 1 hours ago</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3 grid-item mb-3 mt-3">
          <div className="video-image"></div>
          <div className="video-information mt-2">
            <div className="row">
              <div className="channel-image col-2">
                <div className="image"></div>
              </div>
              <div className="information col-10">
                <span className="video-title">Video test</span>
                <span className="channel-name">Tên channel</span>
                <span className="video-detail">2N views - 1 hours ago</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3 grid-item mb-3 mt-3">
          <div className="video-image"></div>
          <div className="video-information mt-2">
            <div className="row">
              <div className="channel-image col-2">
                <div className="image"></div>
              </div>
              <div className="information col-10">
                <span className="video-title">Video test</span>
                <span className="channel-name">Tên channel</span>
                <span className="video-detail">2N views - 1 hours ago</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3 grid-item mb-3 mt-3">
          <div className="video-image"></div>
          <div className="video-information mt-2">
            <div className="row">
              <div className="channel-image col-2">
                <div className="image"></div>
              </div>
              <div className="information col-10">
                <span className="video-title">Video test</span>
                <span className="channel-name">Tên channel</span>
                <span className="video-detail">2N views - 1 hours ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
