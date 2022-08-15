import "./Homepage.scss";
import { useState, useEffect } from "react";
import { fetchVideoRandom } from "../service/videoService";
import Card from "../components/Card";

function Homepage(props) {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchVideos = async (type) => {
      try {
        let res = await fetchVideoRandom(type);
        setVideos(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchVideos(props.type);
  }, [props.type]);

  return (
    <div className="videos-container">
      <div class="row grid-container">
        {videos.length > 0 ? (
          videos.map((video, index) => {
            return <Card video={video} key={video._id} />;
          })
        ) : (
          <div>
            <p>No videos</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Homepage;
