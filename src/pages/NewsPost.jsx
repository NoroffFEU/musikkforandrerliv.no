import React from 'react';
import { useParams, Link } from 'react-router-dom';

function NewsPost() {
  const { id } = useParams();
  
  return (
    <div className="container mx-auto">
      {/* Navigation Header Section */}
      <section>
        {/* News post label and date */}
        <div className="flex justify-between items-center mb-6">
          <div>NEWS POST</div>
          <div>July 15, 2023</div>
        </div>
      </section>
      
      {/* Title Section */}
      <section>
        {/* Main title */}
        <h1 className="text-4xl font-bold mb-2">MMF Culture and Arts Festival</h1>
        {/* Author info */}
        <p className="mb-8">written by Chat GPT</p>
      </section>
      
      {/* Content Sections */}
     <section>
        
     </section>
    </div>
  );
}

export default NewsPost;