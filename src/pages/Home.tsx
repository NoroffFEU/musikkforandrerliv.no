import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { HeroSection } from '../components/homePage/HeroSection';

// Use absolute path for images
const heartIcon = '/assets/images/svgs/heart.svg';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <h1 className="text-2xl font-extrabold">
          {t('title')}{' '}
          <img className="inline bg-red-600" src={heartIcon} alt="" />
        </h1>
        
        <div className="flex items-center justify-center h-96 px-4 w-full">
          <Link
            to="/test-translations"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            {t('goToTestTranslations')}
          </Link>
        </div>
      </div>

      <HeroSection />
      <section id="HistorySection"></section>
      <section id="StaffSection"></section>
      <section id="WorkSection"></section>
      <section id="VolunteerSection"></section>
      <section id="SupportSection"></section>
      <section id="GallerySection"></section>
      <section id="CalenderSection"></section>
    </div>
  );
};

export default Home;