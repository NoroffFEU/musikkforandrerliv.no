import React from 'react';

import EngagementButtons from './EngagementButtons';

const ReasonsToAttend = () => {
  return (
    <div className="w-full max-w-[1000px] mx-auto px-4 pb-10 md:pb-[60px] font-montserrat text-[#212121]">
      <h2 className="font-semibold text-xl md:text-[32px] mt-10 md:mt-16 mb-4 leading-snug md:leading-[150%]">
        Why Attend?
      </h2>
      <p className="text-sm md:text-[18px] mb-6 md:mb-8 leading-relaxed md:leading-[160%]">
        The Back-to-School Fundraiser Gala is more than a gathering; it's a
        pivotal moment where you can directly impact the educational journey of
        countless children. Every ticket purchased, every auction item bid on,
        and every donation made during the gala will go directly towards
        supporting MMF’s comprehensive education programs. From school supplies
        and tuition fees to teacher salaries and educational materials, your
        support will lay the foundation for a brighter, more promising future
        for the children we serve.
      </p>

      <h2 className="font-semibold text-xl md:text-[32px] mb-4 leading-snug md:leading-[150%]">
        What to Expect?
      </h2>
      <ul className="list-disc pl-5 text-sm md:text-[18px] space-y-3 mb-6 md:mb-8 leading-relaxed">
        <li>
          Elegant Dining Experience: Enjoy a gourmet dinner prepared by some of
          the finest chefs in Madagascar, accompanied by a selection of
          exquisite wines and beverages.
        </li>
        <li>
          Silent Auction: Bid on an array of unique items and experiences, with
          all proceeds going directly towards our educational initiatives.
        </li>
        <li>
          Inspiring Speeches: Hear firsthand from the founders of MMF,
          educators, and the children whose lives you've touched, sharing
          stories of hope and triumph.
        </li>
        <li>
          Live Entertainment: The evening will feature breathtaking performances
          by MMF students, showcasing the talents nurtured through your support.
        </li>
        <li>
          Networking: Mingle with like-minded individuals, philanthropists, and
          community leaders who share your passion for making a difference.
        </li>
      </ul>

      <h2 className="font-semibold text-xl md:text-[32px] mb-4 leading-snug md:leading-[150%]">
        How Can You Support?
      </h2>
      <ul className="list-disc pl-5 text-sm md:text-[18px] space-y-3 mb-6 md:mb-8 leading-relaxed">
        <li>
          Purchase a Ticket: Secure your spot at this unforgettable evening and
          be part of the change.
        </li>
        <li>
          Sponsor a Table: Gather friends, family, or colleagues for a special
          night out and amplify your impact.
        </li>
        <li>
          Donate: If you're unable to attend, consider making a donation to
          support MMF’s mission. Every contribution, big or small, makes a
          difference.
        </li>
        <li>
          Volunteer: Lend your time and skills to make the gala a resounding
          success.
        </li>
      </ul>

      <h2 className="font-semibold text-xl md:text-[32px] mb-4 leading-snug md:leading-[150%]">
        Details at a Glance:
      </h2>
      <ul className="list-disc pl-5 text-sm md:text-[18px] space-y-3 mb-6 leading-relaxed">
        <li>Date: August 25, 2024</li>
        <li>Time: 6:00 PM – 11:00 PM</li>
        <li>Dress Code: Formal Attire</li>
        <li>Tickets: [Link to purchase tickets or reservation details]</li>
      </ul>

      <p className="text-sm md:text-[18px] mb-4 leading-relaxed md:leading-[160%]">
        Your presence and support at the Back-to-School Fundraiser Gala will
        echo in the classrooms and futures of the children we serve. Together,
        we can ensure that education, the most powerful tool for change, is
        within their reach.
      </p>

      <p className="text-sm md:text-[18px] mb-4 leading-relaxed md:leading-[160%]">
        For more information, to purchase tickets, or to make a donation, please
        visit MMF’s website or{' '}
        <a href="/Contact" className="text-orange-500 underline">
          contact us
        </a>
        .
      </p>

      <p className="text-sm md:text-[18px] leading-relaxed md:leading-[160%]">
        We look forward to welcoming you to an evening of celebration, hope, and
        impact. Let's make this back-to-school season a turning point for
        children who dream of a brighter tomorrow.
      </p>

      <p className="text-sm md:text-[18px] mt-6 leading-relaxed md:leading-[160%]">
        Music Makes Futures (MMF) – Transforming lives through the power of
        education and music. Join us, because every child deserves a chance to
        succeed.
      </p>
      <EngagementButtons />
    </div>
  );
};

export default ReasonsToAttend;
