import React, { useEffect, useState } from "react";
import "./Playvideo.css";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";
import { API_KEY, value_convert } from "../../data";
import moment from "moment";
import { useParams } from "react-router-dom";

const Playvideo = () => {

    const {videoId} = useParams()

    const [apidata,setapidata] = useState(null)
    const fetchvideodata = async ()=> {
        const videodata_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
        await fetch(videodata_url).then(response=>response.json()).then(data=>setapidata(data.items[0]))
    }
    
    useEffect(()=>{
        fetchvideodata()
    },[videoId])

 const [channeldata,setchanneldata] = useState(null)
  const fetchChannelData = async ()=>{
    const channeldata_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apidata.snippet.channelId}&key=${API_KEY}`
    await fetch(channeldata_url).then(res=>res.json()).then(data=>setchanneldata(data.items[0]))
  }

  useEffect(()=>{
    fetchChannelData()
  },[apidata])


  const [commentdata,setcommentdata] = useState([])
  const fetchComment = async () => {
    const commentdata_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=40&videoId=${videoId}&key=${API_KEY}`
    await fetch(commentdata_url).then(res=>res.json()).then(data=>setcommentdata(data.items))
  }
  
  useEffect(()=>{
    fetchComment()
  },[apidata])

    return (
        <div className="play-video">
            {/* <video src={video1} controls autoPlay></video> */}
            <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h3>{apidata?apidata.snippet.title:"title is here"}</h3>
            <div className="video-info">
                <p>{apidata?value_convert(apidata.statistics.viewCount):"100k"} &bull; {apidata?moment(apidata.snippet.publishedAt).fromNow():"2 days ago"}</p>
                <div>
                    <span>
                        <img src={like} alt="" />
                        {apidata?value_convert(apidata.statistics.likeCount):"100"}
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
                <img src={channeldata?channeldata.snippet.thumbnails.default.url:""} alt="" />
                <div>
                    <p>{apidata?apidata.snippet.channelTitle:""}</p>
                    <span>{channeldata?value_convert(channeldata.statistics.subscriberCount):"1M"} subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="description">
                <p>{apidata?apidata.snippet.description.slice(0,400):""}</p>
                <hr />
                <h4>{apidata?value_convert(apidata.statistics.commentCount):"107 comment"} comments</h4>
                
                {commentdata.map((item,index)=>{
                         return (
                            <div  key = {index} className="comments">
                            <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                            <div>
                            <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>2 hours ago</span></h3>
                            <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                            <div className="comment-action">
                                <img src={like} alt="" />
                                <span>{value_convert(item.snippet.topLevelComment.snippet.likeCount)}</span>
                                <img src={dislike} alt="" />
                            </div>
                            </div> 
                        </div> 

                         )
                })}
              
            </div>
        </div>
    );
};

export default Playvideo;
