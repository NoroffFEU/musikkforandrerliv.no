import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NewsPost() {
  const posts = [
    {
      date: 'July 15, 2023',
      title: 'MMF Culture and Arts Festival',
      author: 'Chat GPT',
      content: [
        {
          heading: 'Celebrating the Heartbeat of Madagascar',
          text: 'July 15, 2023, marked a day of vibrant celebration, unity, and the transformative power of music and art at the MMF Culture and Arts Festival...',
        },
        {
          heading: 'A Day to Remember',
          text: 'From the early hours, the air buzzed with anticipation as visitors...',
        },
        {
          heading: 'A Symphony of Sights and Sounds',
          text: 'The festival grounds came alive with a plethora of activities...',
        },
        {
          heading: 'Featuring local artists',
          text: 'A highlight was the art exhibit, featuring works created by MMF students and local artists...',
        },
      ],
    },
    {
      date: 'August 20, 2023',
      title: 'Another Inspiring Event',
      author: 'Jane Doe',
      content: [
        {
          heading: 'Community Comes Together',
          text: 'A truly inspiring day with performances, art, and food!',
        },
      ],
    },
  ];

  const [index, setIndex] = useState(0);
  const post = posts[index];

  return (
    <div className="w-full max-w-[1000px] mx-auto mt-[100px] pb-[60px] px-4 font-montserrat">
      {/* Breadcrumb Navigation */}
      <nav className="mb-[21px]">
        <Link to="/news" className="text-blue-600 hover:underline">
          Back to News
        </Link>
      </nav>

      {/* News Post Header */}
      <section className="w-full h-auto flex justify-between items-center">
        <div className="font-semibold text-[18px] leading-[150%] tracking-[0]">
          NEWS POST
        </div>
        <div className="font-normal text-[18px] leading-[150%] tracking-[0]">
          {post.date}
        </div>
      </section>

      {/* Main Title */}
      <section className="w-full h-auto flex items-center mt-[20px]">
        <h1 className="font-semibold text-[56px] leading-[150%] tracking-[0] max-md:font-freeman max-md:font-normal max-md:text-[30px] max-md:leading-[100%]">
          {post.title}
        </h1>
      </section>

      {/* Author */}
      <section className="mt-[21px] max-md:mt-[75px] max-md:text-center">
        <p className="font-normal text-[18px] leading-[150%] tracking-[0] max-md:text-[14px] max-md:leading-[130%]">
          written by {post.author}
        </p>
      </section>

      {/* Content */}
      <section className="flex flex-col space-y-[21px]">
        {post.content.map((section, i) => (
          <div key={i}>
            <h2 className="font-semibold text-[32px] leading-[150%] tracking-[0] max-md:font-freeman max-md:font-medium max-md:text-[20px] max-md:leading-[150%] max-md:mt-[49.73px]">
              {section.heading}
            </h2>
            <p className="font-normal text-[18px] leading-[150%] tracking-[0] max-md:text-[14px] max-md:leading-[130%]">
              {section.text}
            </p>
            <div className="max-md:mx-[25px]">
              <img
                src="/assets/placeholder-images/CF058C04-846A-47DA-9861-6F7A3EEB445E.webp"
                alt="Celebration"
                className="w-full h-[200px] object-cover mt-[32px] max-md:h-[105px] max-md:px-[25px]"
              />
            </div>
          </div>
        ))}

        {/* Published */}
        <p className="font-normal text-[14px] text-gray-500 mt-[21px]">
          Published: {post.date}
        </p>
      </section>

      {/* Navigation Buttons */}
      <div className="w-full flex justify-between mt-[21px]">
        {/* Previous Button */}
        {index > 0 && (
          <button
            onClick={() => setIndex(index - 1)}
            className="w-[131px] h-[32px] border border-black rounded-[9px] px-[30px] py-0 text-black flex items-center justify-center font-montserrat font-semibold text-[14px] leading-[100%] tracking-[0] uppercase whitespace-nowrap"
          >
            PREVIOUS POST
          </button>
        )}
        {index === 0 && <div />}

        {/* Next Button */}
        {index < posts.length - 1 && (
          <button
            onClick={() => setIndex(index + 1)}
            className="w-[131px] h-[32px] border border-black rounded-[9px] px-[30px] py-0 text-black flex items-center justify-center font-montserrat font-semibold text-[14px] leading-[100%] tracking-[0] uppercase whitespace-nowrap"
          >
            NEXT POST
          </button>
        )}
      </div>
    </div>
  );
}

export default NewsPost;
