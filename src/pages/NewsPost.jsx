import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NewsPost() {
  const [postData, setPostData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = sessionStorage.getItem("newsPostData");
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        setPostData(parsedData);
        console.log('Retrieved from sessionStorage:', parsedData);
      } catch (error) {
        console.error('Error parsing post data:', error);
        navigate('/news');
      }
    } else {
      navigate('/news');
    }
  }, [navigate]);

  if (!postData) {
    return (
      <div className="w-full max-w-[1000px] mx-auto mt-[100px] text-center">
        Loading post...
      </div>
    );
  }

  let contentParagraphs = [];
  if (typeof postData.content === 'string') {
    contentParagraphs = postData.content.split('\n').filter(para => para.trim() !== '');
  } else {
    contentParagraphs = [postData.content];
  }

  return (
    <div className="w-full max-w-[1000px] mx-auto mt-[100px] pb-[60px] px-4 font-montserrat">
      <nav className="mb-[21px]">
        <Link to="/news" className="text-blue-600 hover:underline">
          Back to News
        </Link>
      </nav>

      <section className="w-full h-auto flex justify-between items-center">
        <div className="font-semibold text-[18px] leading-[150%] tracking-[0]">
          {postData.newsPost || "NEWS POST"}
        </div>
        <div className="font-normal text-[18px] leading-[150%] tracking-[0]">
          {postData.date || ""}
        </div>
      </section>

      <section className="w-full h-auto flex items-center mt-[20px]">
        <h1 className="font-semibold text-[56px] leading-[150%] tracking-[0] max-md:font-freeman max-md:font-normal max-md:text-[30px] max-md:leading-[100%]">
          {postData.title}
        </h1>
      </section>

      <section className="mt-[21px] max-md:mt-[75px] max-md:text-center">
        <p className="font-normal text-[18px] leading-[150%] tracking-[0] max-md:text-[14px] max-md:leading-[130%]">
          written by {postData.writtenBy}
        </p>
      </section>

      <section className="flex flex-col space-y-[21px]">
        {contentParagraphs.length > 0 && (
          <>
            <h2 className="font-semibold text-[32px] leading-[150%] tracking-[0] max-md:font-freeman max-md:font-medium max-md:text-[20px] max-md:leading-[150%] max-md:mt-[49.73px]">
              {contentParagraphs[0].length > 50
                ? contentParagraphs[0].substring(0, 50) + "..."
                : contentParagraphs[0]}
            </h2>
            <p className="font-normal text-[18px] leading-[150%] tracking-[0] max-md:text-[14px] max-md:leading-[130%]">
              {contentParagraphs[0]}
            </p>
            {postData.image && (
              <div className="max-md:mx-[25px]">
                <img
                  src={postData.image || "https://placehold.co/600x600"}
                  alt={postData.title || "Article image"}
                  className="w-full max-h-[400px] object-cover mt-[32px] max-md:h-[200px] max-md:px-[25px]"
                  onError={(e) => {
                    console.error("Image failed to load:", postData.image);
                    e.target.src = "https://placehold.co/600x600";
                  }}
                />
              </div>
            )}
          </>
        )}

        {contentParagraphs.slice(1).map((paragraph, index) => (
          <div key={index}>
            <h2 className="font-semibold text-[32px] leading-[150%] tracking-[0] max-md:font-freeman max-md:font-medium max-md:text-[20px] max-md:leading-[150%] max-md:mt-[49.73px]">
              {paragraph.length > 50
                ? paragraph.substring(0, 50) + "..."
                : paragraph}
            </h2>
            <p className="font-normal text-[18px] leading-[150%] tracking-[0] max-md:text-[14px] max-md:leading-[130%]">
              {paragraph}
            </p>
          </div>
        ))}

        <p className="font-normal text-[14px] text-gray-500 mt-[21px]">
          Published: {postData.date || ""}
        </p>
      </section>
    </div>
  );
}

export default NewsPost;
