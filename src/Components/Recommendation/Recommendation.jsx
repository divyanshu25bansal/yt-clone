import React, { useEffect, useState } from "react";
import "./Recommendation.css";
import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";
import { API_KEY} from "../../data";
import { value_convert } from "../../data";
import { Link } from "react-router-dom";


const Recommendation = ({ categoryId }) => {
  const [apiData, setapiData] = useState([]);

  const fetchsimilardata = async () => {
    const similardata_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=us&videoCategoryId=${categoryId}&key=${API_KEY} `;
    await fetch(similardata_url)
      .then((res) => res.json())
      .then((data) => {
        setapiData(data.items);
      });
  };

  useEffect(() => {
    fetchsimilardata();
  }, []);

  return (
    <div className="recommendation">
      {apiData.map((item,index) => {
        return (
          <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <div className="side-video-info">
              <h4>{item.snippet.title}</h4>
              <p>{item.snippet.channelTitle}</p>
              <p>{value_convert(item.statistics.viewCount)}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Recommendation;
