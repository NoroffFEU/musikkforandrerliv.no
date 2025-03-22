import React, {lazy, Suspense} from "react";
import  {HeroSection}  from "../components/homePage/heroSection";
import WorkSection from "../components/homePage/workSection";
import { useTranslation } from "react-i18next"; // You already get 'i18n' from this hook
import "../i18n";
import { Link } from "react-router-dom";
import heart from "/assets/images/svgs/heart.svg";


// Safe lazy loader for components
const safeLazy = (importFunc) =>
  lazy(() =>
    importFunc()
      .then((mod) => {
        const comp = mod.default || mod[Object.keys(mod)[0]];
        if (!comp) throw new Error("Missing export in component");
        return { default: comp };
      })
      .catch((err) => {
        console.warn("Component not ready yet:", err);
        // Load an empty fallback component
        return { default: () => null };
      })
  );
  const HistorySection = safeLazy(() => import("../components/homePage/historySection"));
  const StaffSection = safeLazy(() => import("../components/homePage/staffSection"));
  const VolunteerSection = safeLazy(() => import("../components/homePage/volunteerSection"));
  const SupportSection = safeLazy(() => import("../components/homePage/supportSection"));
  const GallerySection = safeLazy(() => import("../components/homePage/gallerySection"));
  const CalenderSection = safeLazy(() => import("../components/homePage/calenderSection"));


const SelectLanguageButton = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="flex space-x-4">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => i18n.changeLanguage("en")}>
        {t("english")}
      </button>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded"
        onClick={() => i18n.changeLanguage("no")}>
        {t("norwegian")}
        {/* onClick={() => i18n.changeLanguage('en')}
      
        {t('english')} */}
      </button>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded"
        onClick={() => i18n.changeLanguage('no')}
      >
        {t('norwegian')}
      </button>
    </div>
  );
};

const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <h1 className="text-2xl font-extrabold">
          {t('Welcome to MMF project')}{' '}
          <img className="inline bg-red-600" src={heart} alt="" />
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

      <Suspense fallback={<div>Loading...</div>}>
        <HistorySection />
        <StaffSection />
      </Suspense>

      <WorkSection />

      <Suspense fallback={<div>Loading...</div>}>
        <VolunteerSection />
        <SupportSection />
        <GallerySection />
        <CalenderSection />
      </Suspense>

 
    </div>
  );
};

export default Home;
