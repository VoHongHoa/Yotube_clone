import "./Video.scss";

function Video() {
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
            allowfullscreen
          ></iframe>
          <div className="detail-video">
            <span className="hashtag">#duyenduyensoso #duuyen #orinnremix</span>
            <span className="title">
              Duyên Duyên Số Số (Orinn Remix) - Du Uyên | Gặp Gỡ Để Chia Ly Chia
              Ly Để Gặp Gỡ Remix Tiktok 2022
            </span>
            <div className="detail mt-3">
              <span>19.021 lượt xem - 11 thg 8, 2022</span>
              <div className="actions">
                <button>
                  <i class="fa-solid fa-thumbs-up"></i> Like
                </button>
                <button>
                  <i class="fa-solid fa-thumbs-down"></i> Dislike
                </button>
                <button>
                  <i class="fa-solid fa-share"></i> Share
                </button>
                <button>
                  <i class="fa-solid fa-floppy-disk"></i>Save
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
                      <span>Tăng Duy Tân </span>
                      <span className="num-sub">280 N người đăng ký</span>
                    </div>
                    <div className="hashtag mt-4 mb-4">
                      <span>#TangDuyTan #BenTrenTangLau</span>
                    </div>
                    <div className="descriptions">
                      <p>
                        Hello các khán thính giả thân yêu, Bên Trên Tầng Lầu sẽ
                        là bài hát "khai vị" cho liên tiếp những ca khúc mà Tân
                        phát hành trong năm nay. Hy vọng các bạn sẽ có một cái
                        nhìn "nghệ thuật" hơn với thể loại này. Cám ơn mọi người
                        và đừng quên nhấn theo dõi kênh Tăng Duy Tân để đón chờ
                        những sản phẩm tiếp theo nhé!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sub col-3">
                <button className="btn btn-danger">subscribe</button>
                <i class="fa-solid fa-bell"></i>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="comment-container">
            <div className="num-comments">
              <span>3.302 bình luận</span>
              <span className="soft">
                <i class="fas fa-sort"></i>Soft by
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
