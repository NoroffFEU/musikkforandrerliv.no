import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import { HeroSection } from '../components/homePage/heroSection';
// You already get 'i18n' from this hook
import '../i18n';
import heart from '/assets/images/svgs/heart.svg';

const SelectLanguageButton = React.memo(() => {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex space-x-4">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => i18n.changeLanguage('en')}
      >
        {t('english')}
      </button>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded"
        onClick={() => i18n.changeLanguage('no')}
      >
        {t('norwegian')}
      </button>
    </div>
  );
});


const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <h1 className="text-2xl font-extrabold">
          {t('Welcome to MMF project')}{' '}
          <img className="inline bg-red-600" src={heart} alt="" loading="lazy" />
        </h1>
        <button onClick={() => i18n.changeLanguage('no')}>NO</button>
        <div className="flex items-center justify-center h-96 px-4 w-full">
          <SelectLanguageButton />
        </div>
      </div>

      <Link
        to="/test-translations"
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        {t('goToTestTranslations')}
      </Link>

      <div className="space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => i18n.changeLanguage('en')}
        >
          {t('english')}
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => i18n.changeLanguage('no')}
        >
          {t('norwegian')}
        </button>
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
