import "./Card.scss";
import { useNavigate } from "react-router-dom";
import errVideo from "../image/videotest.jpg";
import { format } from "timeago.js";
import { getUserInfor } from "../service/userService";
import { useState, useEffect } from "react";
function Card(props) {
  let navigate = useNavigate();
  const handleSelectVideo = () => {
    navigate("/video/12");
  };
  const [channel, setChannel] = useState({});
  useEffect(() => {
    const fetchDataChanel = async (userId) => {
      try {
        let res = await getUserInfor(userId);
        setChannel(res);
      } catch (e) {
        console.log(e);
      }
    };
    fetchDataChanel(props.video.userId);
  }, [props.video.userId]);
  return (
    <div class="col-3 grid-item mb-3 mt-3">
      <div
        className="video-image"
        onClick={() => handleSelectVideo()}
        style={
          props.video.imgUrl === ""
            ? { backgroundImage: `url(${errVideo}) ` }
            : { backgroundImage: `url(${props.video.imgUrl})` }
        }
      ></div>
      <div className="video-information mt-2">
        <div className="row">
          <div className="channel-image col-2">
            <div
              className="image"
              style={
                channel.img && channel.img !== ""
                  ? { backgroundImage: `url(${channel.imgUrl})` }
                  : { backgroundImage: `url(${errVideo}) ` }
              }
            ></div>
          </div>
          <div className="information col-10">
            <span className="video-title">{props.video.title}</span>
            <span className="channel-name">{channel.name}</span>
            <span className="video-detail">
              {props.video.views} views - {format(props.video.createdAt)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
