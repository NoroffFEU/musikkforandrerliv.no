import React, { useEffect, useState } from 'react';

import ReactMarkdown from 'react-markdown';

import ErrorBoundary from '../components/ErrorBoundary.jsx';

x;
function About() {
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  /**
   * Fetches and loads the about us page markdown content /md file
   * ReactMarkdown is needed  to be installed to render the markdown content
   * npm install react-markdown
   * The content should be styled accordingly .I have not done that.
   * The header ,sub headers  and blockquote are not shown as they should be .
   * npm install @tailwindcss/typography --save-dev
   * this plug in is needed to be installed to style the markdown content
   * The plugin should be added to the tailwind.config.js file or similar I did not want to add even more files and consfigs for now .just wanted to fetch the content and render it, and be a ble to edit via cms
   */
  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch('../../content/about/about.md');
        if (!response.ok) {
          throw new Error(
            `Failed to fetch: ${response.status} ${response.statusText}`,
          );
        }

        const markdownText = await response.text();
        setContent(markdownText);
        //
        // console.log('Markdown content:', markdownText);
        // if (markdownText === '') {
        //   console.log('Markdown content is empty');
        // }
        //
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching markdown:', err);
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchMarkdown();
  }, []);

  return (
    <ErrorBoundary>
      <div className="h-screen w-full flex justify-center items-center flex-col">
        <h1 className="text-2xl font-extrabold ">About Us</h1>
        {/* Styles need to be workded on 🖕 / */}
        <h2>Making a difference through music</h2>

        {isLoading && <div className="animate-pulse">Loading Page...</div>}

        {error && (
          <div className="text-red-500">
            <h2>Error: {error}</h2>
          </div>
        )}

        {!isLoading && !error && (
          <div className="prose flex flex-col justify-center items-center w-full h-full mt-28">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
}

export default About;
