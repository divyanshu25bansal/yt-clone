import React from "react";
import "./Playvideo.css";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";

const Playvideo = ({videoId}) => {
    return (
        <div className="play-video">
            {/* <video src={video1} controls autoPlay></video> */}
            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}></iframe>
            <h3>Lorem ipsum dolor sit amet.</h3>
            <div className="video-info">
                <p>1000 views &bull; 2 days ago</p>
                <div>
                    <span>
                        <img src={like} alt="" />
                        100
                    </span>
                    <span>
                        <img src={dislike} alt="" />
                    </span>
                    <span>
                        <img src={share} alt="" />
                        share
                    </span>
                    <span>
                        <img src={save} alt="" />
                        save
                    </span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={jack} alt="" />
                <div>
                    <p>codeWithMe</p>
                    <span>1M subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="description">
                <p>Learn while working on projects</p>
                <p>subscibe codeWithMe for more content</p>
                <hr />
                <h4>700 Comments</h4>
                <div className="comments">
                    <img src={user_profile}  alt="" />
                    <div>
                    <h3>User123 <span>2 hours ago</span></h3>
                    <p>one of the greatest projects i have ever seen, ,Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, alias? lorem10</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>45</span>
                        <img src={dislike} alt="" />
                    </div>
                    </div>

                    
                </div>
                <div className="comments">
                    <img src={user_profile} className="user-pfp" alt="" />
                    <div>
                    <h3>User123 <span>2 hours ago</span></h3>
                    <p>one of the greatest projects i have ever seen, ,Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, alias? lorem10</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>45</span>
                        <img src={dislike} alt="" />
                    </div></div>
                    
                    
                </div>
                <div className="comments">
                    <img src={user_profile} className="user-pfp" alt="" />
                    <div>
                    <h3>User123 <span>2 hours ago</span></h3>
                    <p>one of the greatest projects i have ever seen, ,Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, alias? lorem10</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>45</span>
                        <img src={dislike} alt="" />
                    </div></div>
                    
                </div>
                <div className="comments">
                    <img src={user_profile} className="user-pfp" alt="" />
                    <div>
                    <h3>User123 <span>2 hours ago</span></h3>
                    <p>one of the greatest projects i have ever seen, ,Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, alias? lorem10</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>45</span>
                        <img src={dislike} alt="" />
                    </div></div>
                    
                </div>
                <div className="comments">
                    <img src={user_profile} className="user-pfp" alt="" />
                    <div>
                    <h3>User123 <span>2 hours ago</span></h3>
                    <p>one of the greatest projects i have ever seen, ,Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, alias? lorem10</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>45</span>
                        <img src={dislike} alt="" />
                    </div></div>
                    
                </div>
                <div className="comments">
                    <img src={user_profile} className="user-pfp" alt="" />
                    <div>
                    <h3>User123 <span>2 hours ago</span></h3>
                    <p>one of the greatest projects i have ever seen, ,Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, alias? lorem10</p>
                  
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>45</span>
                        <img src={dislike} alt="" />
                    </div></div>
                    
                </div>
            </div>
        </div>
    );
};

export default Playvideo;
