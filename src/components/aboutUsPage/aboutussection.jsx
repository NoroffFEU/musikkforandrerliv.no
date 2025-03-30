// src/components/aboutuspage/aboutussection.jsx
import React from "react";


const AboutUsSection = () => {
  return (
    <div className="about-us-section">
      {/* Banner Image */}
      <div className="banner">
        <img
          src="/assets/placeholder-images/IMG_7359.webp"
          alt="About Us Banner"
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Let Us Introduce Ourselves Section */}
      <section className="p-8 text-center">
        <h2 className="text-3xl font-bold">Let Us Introduce Ourselves</h2>
        <p className="text-lg mt-4">
          We are a passionate team dedicated to making a difference through music and education.
        </p>
      </section>

      {/* Holistic Approach Section */}
      <section className="p-8 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center">A Holistic Approach to Education and Support</h2>
        <p className="text-lg mt-4 text-center">
          Our program focuses on empowering children through musical education, fostering creativity, and building confidence.
        </p>
      </section>
    </div>
  );
};

export default AboutUsSection;
