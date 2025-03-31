import React from "react";
import ReadMore from "./Readmore";
import {Link} from "react-router-dom";


const LatestNews = ({ id, newsPost, writtenBy, location, date, title, content, image }) => {
  const handleClick = () => {
    const newsPostData = {
      newsPost,
      writtenBy,
      location,
      date,
      title,
      content,
      image
    };
    sessionStorage.setItem("newsPostData", JSON.stringify(newsPostData));
    console.log('saved to sessionStorage:', newsPostData); // Debugging line
  };
   
  return (
    <article className="bg-white overflow-hidden mb-12">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/4">
          <img 
            src={image || "https://placehold.co/600x600"}   
            alt={title || "News placeholder"}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-2/4 md:px-6">
            <p className="text-gray-500 uppercase md:mt-0 sm:mt-10">{newsPost}</p>
            <Link to={`/news-post`} className="no-underline"
            onClick={handleClick}
            >
            <h3 className="text-4xl font-semibold mt-8">{title}</h3>
            </Link>
            <div className="flex flex-col sm:flex-row justify-between mt-8">
              <p className="text-gray-500 text-sm capitalize">{writtenBy}</p>
              <div className="flex flex-col sm:flex-row sm:gap-2">
                <p className="text-gray-500 text-sm capitalize">{location}</p>
                <p className="text-gray-500 text-sm capitalize">{date}</p>
              </div>
            </div>
            <ReadMore summary={content.slice(0, 120) + "..."} content={content} />
            </div>
      </div>
    </article>
  );
};

export default LatestNews;