import "./Video.scss";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchVideoById } from "../service/videoService";
import { getUserInfor } from "../service/userService";

function Video() {
  const videoId = useLocation().pathname.split("/")[2];
  const [video, setVideo] = useState({});
  const [channel, setChannel] = useState({});
  useEffect(() => {
    const getVideoById = async () => {
      try {
        let res = await fetchVideoById(videoId);
        setVideo(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    const getChannel = async () => {
      try {
        let res = await getUserInfor(video.userId);
        setChannel(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    getVideoById();
    getChannel();
  }, [videoId]);
  return (
    <div className="video-container">
      <div className="row">
        <div className="video-view col-8">
          <iframe
            src="https://www.youtube.com/embed/LaxkmhiECfM"
            title="video"
            width="100%"
            height="520px"
            frameBorder="0"
            allow="autoplay"
            allowFullScreen
          ></iframe>
          <div className="detail-video">
            <span className="hashtag">#duyenduyensoso #duuyen #orinnremix</span>
            <span className="title">{video.title}</span>
            <div className="detail mt-3">
              <span>
                {video.views} views - {video.createdAt}
              </span>
              <div className="actions">
                <button>
                  <i className="fa-solid fa-thumbs-up"></i> Like
                </button>
                <button>
                  <i className="fa-solid fa-thumbs-down"></i> Dislike
                </button>
                <button>
                  <i className="fa-solid fa-share"></i> Share
                </button>
                <button>
                  <i className="fa-solid fa-floppy-disk"></i>Save
                </button>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="descriptions-container">
            <div className="row">
              <div className="information-container col-9">
                <div className="row">
                  <div className=" col-1">
                    <div className="image-channel"></div>
                  </div>
                  <div className="col-11 informations ">
                    <div className="channel-name">
                      <span>{channel.name}</span>
                      <span className="num-sub">{channel.subscribers} sub</span>
                    </div>
                    <div className="hashtag mt-4 mb-4">
                      <span>#TangDuyTan #BenTrenTangLau</span>
                    </div>
                    <div className="descriptions">
                      <p>{video.description}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sub col-3">
                <button className="btn btn-danger">subscribe</button>
                <i className="fa-solid fa-bell"></i>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="comment-container">
            <div className="num-comments">
              <span>3.302 bình luận</span>
              <span className="soft">
                <i className="fas fa-sort"></i>Soft by
              </span>
            </div>
            <div className="add-comment-container row mt-3">
              <div className="col-1 ">
                <div className="user-image"></div>
              </div>
              <div className="col-11 add-comment">
                <input placeholder="Enter your comment" className="col-12" />
                <div className="action">
                  <button className="btn btn-dark">Cancel</button>
                  <button className="btn btn-primary">Add comment</button>
                </div>
              </div>
            </div>
            <div className="detail-comment-container row mt-3">
              <div className="col-1 ">
                <div className="user-image"></div>
              </div>
              <div className="col-11 comment">
                <span className="name-user">Saman Faky</span>
                <p>
                  First of all thanks a lot for this awesome tutorial brother.
                  you always bring extraordinary content for us. Please do a
                  complete backend based on MERN. And "AWS s3" storage service
                  would be great. Please do that for us. All the best. Take love
                  ❤
                </p>
              </div>
            </div>
            <div className="detail-comment-container row mt-3">
              <div className="col-1 ">
                <div className="user-image"></div>
              </div>
              <div className="col-11 comment">
                <span className="name-user">Saman Faky</span>
                <p>
                  First of all thanks a lot for this awesome tutorial brother.
                  you always bring extraordinary content for us. Please do a
                  complete backend based on MERN. And "AWS s3" storage service
                  would be great. Please do that for us. All the best. Take love
                  ❤
                </p>
              </div>
            </div>
            <div className="detail-comment-container row mt-3">
              <div className="col-1 ">
                <div className="user-image"></div>
              </div>
              <div className="col-11 comment">
                <span className="name-user">Saman Faky</span>
                <p>
                  First of all thanks a lot for this awesome tutorial brother.
                  you always bring extraordinary content for us. Please do a
                  complete backend based on MERN. And "AWS s3" storage service
                  would be great. Please do that for us. All the best. Take love
                  ❤
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="other-videos col-4">
          <div className="row">
            <div className="col-6">
              <iframe
                src="https://www.youtube.com/embed/LaxkmhiECfM"
                title="video"
                height="100px"
                width="100%"
                frameBorder="0"
              ></iframe>
            </div>
            <div className="col-6">
              <div className="detail-video">
                <span className="title">
                  Duyên Duyên Số Số (Orinn Remix) - Du Uyên | Gặp Gỡ Để Chia Ly
                  Chia Ly Để Gặp Gỡ Remix Tiktok 2022
                </span>
                <span style={{ fontSize: "small" }}>Lamma Dev</span>
                <span style={{ fontSize: "small" }}>
                  19.021 lượt xem - 11 thg 8, 2022
                </span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <iframe
                src="https://www.youtube.com/embed/LaxkmhiECfM"
                title="video"
                height="100px"
                width="100%"
                frameBorder="0"
              ></iframe>
            </div>
            <div className="col-6">
              <div className="detail-video">
                <span className="title">
                  Duyên Duyên Số Số (Orinn Remix) - Du Uyên | Gặp Gỡ Để Chia Ly
                  Chia Ly Để Gặp Gỡ Remix Tiktok 2022
                </span>
                <span style={{ fontSize: "small" }}>Lamma Dev</span>
                <span style={{ fontSize: "small" }}>
                  19.021 lượt xem - 11 thg 8, 2022
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <iframe
                src="https://www.youtube.com/embed/LaxkmhiECfM"
                title="video"
                height="100px"
                width="100%"
                frameBorder="0"
              ></iframe>
            </div>
            <div className="col-6">
              <div className="detail-video">
                <span className="title">
                  Duyên Duyên Số Số (Orinn Remix) - Du Uyên | Gặp Gỡ Để Chia Ly
                  Chia Ly Để Gặp Gỡ Remix Tiktok 2022
                </span>
                <span style={{ fontSize: "small" }}>Lamma Dev</span>
                <span style={{ fontSize: "small" }}>
                  19.021 lượt xem - 11 thg 8, 2022
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
