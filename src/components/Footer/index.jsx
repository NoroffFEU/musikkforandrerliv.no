import React, { useState } from 'react';

import { Link, NavLink } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import { RiFacebookBoxLine, RiInstagramLine } from 'react-icons/ri';

import Button from '../Button';
import SelectLanguageButton from '../lang/select-language-button';
import Logo from '/assets/placeholder-images/logo.png';

function Footer() {
  const { t } = useTranslation();

  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  function onEmailSubmit(event) {
    event.preventDefault();
    console.log(event.target.value);
  }

  // Helper to check if screen is below 'md'
  const [isBelowMd, setIsBelowMd] = useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => setIsBelowMd(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="font-sans">
      {/* Subscribe section */}
      <section className="font-sans h-[364px] w-full px-4 bg-(--color-sunset-red) flex justify-center items-center">
        <div className="grid gap-6 text-center text-black max-w-[480px] m-2 sm:m-0">
          <div className="flex flex-col justify-center gap-4 sm:gap-6">
            <h3 className="text-[32px] font-semibold">
              {t('common.newsletter.title')}
            </h3>
            <p className="flex flex-wrap">
              {t('common.newsletter.description')}
            </p>
          </div>

          <form
            className="flex flex-wrap sm:flex-nowrap gap-4 justify-center sm:mt-2"
            onSubmit={onEmailSubmit}
          >
            <input
              type="text"
              value={email}
              onChange={handleEmailChange}
              placeholder="example@example.com"
              className="h-[49px] sm:h-[57px] w-full sm:w-[306px] rounded-lg border-1 bg-white p-4"
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
            />
            <button className="cursor-pointer h-[49px] sm:h-[57px] w-full md:w-40 bg-white text-(--color-sunset-red) rounded-lg font-semibold text-2xl active:bg-(--color-hover-red) hover:bg-(--color-hover-red) hover:text-white focus:bg-(--color-hover-red) focus:text-white focus:border focus:border-white">
              {t('common.buttons.signUp')}
            </button>
          </form>
        </div>
      </section>

      {/* Links */}
      <section className="font-sans h-[1069px] sm:h-[950px] w-full px-6 md:px-4 bg-(--color-dark-green) text-white md:h-[553px] flex flex-col items-center relative">
        <div className="w-full max-w-[1200px] grid grid-cols-2 sm:grid-rows-1 md:grid-cols-3 gap-y-18 md:gap-2 justify-center items-center mt-12 sm:mt-20 md:mt-24">
          <img
            src={Logo}
            alt="Musikkforandrerliv Logo"
            className="w-[170px] h-[170px] lg:h-[250px] lg:w-[250px] col-start-1 row-start-1"
          />
          <div className="text-2xl flex flex-col col-start-1 md:col-start-2 md:row-start-1 gap-8">
            <Link to="/about" className="hover:text-gray-300 hover:underline">
              {t('common.footer.aboutUs')}
            </Link>
            <Link
              to="/news#latestNewsSection"
              className="hover:text-gray-300 hover:underline"
            >
              {t('common.footer.news')}
            </Link>
            <Link
              to="/news#eventsSection"
              className="hover:text-gray-300 hover:underline"
            >
              {t('common.footer.events')}
            </Link>
          </div>
          <div className="text-2xl flex flex-col col-start-1 md:col-start-3 md:row-start-1 gap-8">
            <Link to="/#gallerySection">{t('common.footer.gallery')}</Link>
            <Link to="/work">{t('common.footer.ourWork')}</Link>
            <Link to="/contact">{t('common.footer.contactUs')}</Link>
            {isBelowMd && (
              <NavLink
                to="/support"
                className="bg-[var(--color-sunset-red)] hover:bg-[var(--color-hover-red)] py-[12px] px-7 mr-auto font-semibold text-white text-2xl rounded-lg focus:border-2"
              >
                {t('common.buttons.donate')}
              </NavLink>
            )}
          </div>

          <div className="col-start-2 md:col-start-4 row-start-1 gap-4 flex flex-col items-center">
            {!isBelowMd && (
              <NavLink
                to="/support"
                className="bg-[var(--color-sunset-red)] hover:bg-[var(--color-hover-red)] py-[12px] px-7 mr-auto font-semibold text-white text-2xl rounded-lg focus:border-2 col-start-1 md:col-start-4 md:row-start-1 md:mb-3 relative -top-3"
              >
                {t('common.buttons.donate')}
              </NavLink>
            )}

            <p className="uppercase text-2xl font-bold">
              {t('common.footer.followUs')}
            </p>
            <div className="w-fit flex gap-4 justify-center items-center">
              {/* Add correct 'href' when the time comes*/}
              <Button
                href="#"
                isExternalLink
                aria-label="Visit our Facebook page"
                size="normal"
                variant="primary"
                className="flex items-center justify-center !rounded-full !p-1 w-14 h-14 !text-4xl"
              >
                <RiFacebookBoxLine />
              </Button>

              {/* Add correct 'href' when the time comes*/}
              <Button
                href="#"
                isExternalLink
                aria-label="Visit our Instagram page"
                size="normal"
                variant="primary"
                className="flex items-center justify-center !rounded-full !p-1 w-14 h-14 !text-4xl"
              >
                <RiInstagramLine />
              </Button>
            </div>
            <div className="md:hidden flex flex-col gap-4 ">
              {/* Add correct translation and language button*/}
              <p className="text-xl">Language </p>
              <SelectLanguageButton />
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center text-center gap-4 sm:gap-6 absolute bottom-14">
          <Link to="#" className="underline hover:text-gray-300">
            {t('common.footer.privacyPolicy')}
          </Link>
          <Link to="#" className="underline hover:text-gray-300">
            {t('common.footer.termsAndConditions')}
          </Link>
        </div>
        <p className="flex absolute bottom-4">© Musikkforandrerliv</p>
      </section>
    </section>
  );
}

export default Footer;
