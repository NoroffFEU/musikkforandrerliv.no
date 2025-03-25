import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import ErrorBoundary from '../components/ErrorBoundary.jsx';
import { GallerySection } from '../components/homePage/gallerySection';
import { HeroSection } from '../components/homePage/heroSection';
import { HistorySection } from '../components/homePage/historySection';
import SupportSection from '../components/homePage/supportSection';
import VolunteerSection from '../components/homePage/volunteerSection';
import '../i18n';
import heart from '/assets/images/svgs/heart.svg';

const Home = () => {
  const { t } = useTranslation();

  return (
    <ErrorBoundary>
      <div>
        <div className="h-screen w-full flex flex-col justify-center items-center">
          <h1 className="text-2xl font-extrabold">
            {t('Welcome to MMF project')}{' '}
            <img className="inline bg-red-600" src={heart} alt="" />
          </h1>
          <div className="flex items-center justify-center h-96 px-4 w-full">
            <Link
              to="/test-translations"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Test Translations
            </Link>
          </div>
        </div>

        <HeroSection />
        <HistorySection />
        <section id="StaffSection"></section>
        <section id="WorkSection"></section>
        <VolunteerSection />
        <section id="SupportSection">
          <SupportSection />
        </section>
        <GallerySection />
        <section id="CalenderSection"></section>
      </div>
    </ErrorBoundary>
  );
};

export default Home;
