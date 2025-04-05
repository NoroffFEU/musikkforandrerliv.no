import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

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

  return (
    <section className="font-sans">
      {/* Subscribe section */}
      <section className="h-[364px] bg-(--color-sunset-red) flex justify-center items-center">
        <div className="grid gap-8 py-20 text-center text-black max-w-[480px] m-10 sm:m-0">
          <div className="flex flex-col justify-center gap-6">
            <h3 className="text-[32px]">{t('common.newsletter.title')}</h3>
            <p className="flex flex-wrap">
              {t('common.newsletter.description')}
            </p>
          </div>

          <form
            className="flex flex-wrap sm:flex-nowrap gap-4 justify-center"
            onSubmit={onEmailSubmit}
          >
            <input
              type="text"
              value={email}
              onChange={handleEmailChange}
              placeholder="example@example.com"
              className="h-[49px] w-full rounded-lg border-1 bg-white p-4 sm:w-[306px] md:h-[57px]"
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
            />
            <button className="h-[49px] md:h-[57px] w-full bg-white text-(--color-sunset-red) rounded-lg font-semibold text-2xl active:bg-(--color-sunset-red) active:text-white hover:bg-(--color-sunset-red) hover:text-white focus:bg-(--color-sunset-red) focus:text-white focus:border focus:border-white">
              {t('common.buttons.signUp')}
            </button>
          </form>
        </div>
      </section>

      {/* Links */}
      <section className="h-[1069px] bg-(--color-dark-green) text-white md:h-[553px] flex flex-col items-center relative">
        <div className="grid grid-cols-2 sm:grid-rows-1 md:grid-cols-3 gap-4 justify-center items-center mt-22 md:mt-24">
          <img
            src={Logo}
            alt="Musikkforandrerliv Logo"
            className="w-[170px] h-[170px] lg:h-[250px] lg:w-[250px] col-start-1 row-start-1"
          />
          <div className="text-2xl flex flex-col col-start-1 md:col-start-2 md:row-start-1 gap-8">
            <Link to="/about">{t('common.footer.aboutUs')}</Link>
            <Link to="/news#latestNewsSection">{t('common.footer.news')}</Link>
            <Link to="/news#eventsSection">{t('common.footer.events')}</Link>
          </div>
          <div className="text-2xl flex flex-col col-start-1 md:col-start-3 md:row-start-1 gap-8">
            <Link to="/#gallerySection">{t('common.footer.gallery')}</Link>
            <Link to="/work">{t('common.footer.ourWork')}</Link>
            <Link to="/contact">{t('common.footer.contactUs')}</Link>
          </div>
          <div className="col-start-2 md:col-start-4  row-start-1 mt-12 gap-4 flex flex-col">
            <button className="bg-(--color-sunset-red) h-[57px] w-[147px] font-semibold text-white text-2xl rounded-lg focus:border-2 col-start-1 md:col-start-4 md:row-start-1">
              {t('common.buttons.donate')}
            </button>

            <p className="uppercase text-2xl font-bold">
              {t('common.footer.followUs')}
            </p>
            <div>
              <Link to="#">Facebook</Link>
              <Link to="#">Instagram</Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 flex flex-col gap-4 m-0 items-center text-center">
          <div>
            <Link to="#">{t('common.footer.privacyPolicy')}</Link>
            <Link to="#">{t('common.footer.termsAndConditions')}</Link>
          </div>

          <p>© Musikkforandrerliv</p>
        </div>
      </section>
    </section>
  );
}

export default Footer;
