import React, { lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import ErrorBoundary from "../components/ErrorBoundary.jsx";
import { HeroSection } from "../components/homePage/heroSection";
import WorkSection from "../components/homePage/workSection";
import "../i18n";
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
        return { default: () => null };
      })
  );

const HistorySection = safeLazy(() => import("../components/homePage/historySection"));
const StaffSection = safeLazy(() => import("../components/homePage/staffSection"));
const VolunteerSection = safeLazy(() => import("../components/homePage/volunteerSection"));
const SupportSection = safeLazy(() => import("../components/homePage/supportSection"));
const GallerySection = safeLazy(() => import("../components/homePage/gallerySection"));
const CalenderSection = safeLazy(() => import("../components/homePage/calenderSection"));

const Home = () => {
  const { t } = useTranslation();

  return (
    <ErrorBoundary>
      <div>
        <div className="h-screen w-full flex flex-col justify-center items-center">
          <h1 className="text-2xl font-extrabold">
            {t("Welcome to MMF project")}{" "}
            <img className="inline bg-red-600" src={heart} alt="heart icon" />
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

        <Suspense fallback={<div>Loading...</div>}>
          <HistorySection />
          <StaffSection />
        </Suspense>

        <WorkSection />

        <Suspense fallback={<div>Loading...</div>}>
          <VolunteerSection />
          <section id="SupportSection">
            <SupportSection />
          </section>
          <GallerySection />
          <CalenderSection />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
};

export default Home;
