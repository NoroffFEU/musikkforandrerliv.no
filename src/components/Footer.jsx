import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center mt-22 md:mt-24">
          {/* Placeholder for logo */}
          <Link
            href="/"
            className="w-[170px] h-[170px] lg:h-[250px] lg:w-[250px] col-start-1"
          >
            <img src="/assets/placeholder-images/logo.png" alt="footer-logo" />
          </Link>

          <div className="text-2xl flex flex-col col-start-1 md:col-start-2 gap-8 max-md:mb-4">
            <Link to="/about">{t('common.footer.aboutUs')}</Link>
            <Link to="/news">{t('common.footer.news')}</Link>
            <Link to="/events">{t('common.footer.events')}</Link>
          </div>
          <div className="text-2xl flex flex-col col-start-1 md:col-start-3 gap-8">
            <Link to="/gallery">{t('common.footer.gallery')}</Link>
            <Link to="/work">{t('common.footer.ourWork')}</Link>
            <Link to="/contact">{t('common.footer.contactUs')}</Link>
          </div>

          <div className="col-start-2 md:col-start-4 row-start-1 mt-12 gap-4 flex flex-col">
            <Link
              to="/donate"
              className="bg-(--color-sunset-red) h-[57px] w-[147px] font-semibold text-white grid place-items-center text-2xl rounded-lg focus:border-2 col-start-1 md:col-start-4 md:row-start-1"
            >
              {t('common.buttons.donate')}
            </Link>

            <p className="uppercase text-2xl font-bold">
              {t('common.footer.followUs')}
            </p>
            <div className="flex gap-8">
              <Link
                className="bg-[#ee6352] rounded-full grid place-items-center size-14 aspect-square"
                to="https://www.facebook.com/musicchangeslivesMadagascar/"
              >
                {/* Author: https://www.svgrepo.com/author/Konstantin%20Filatov/ - License: https://www.svgrepo.com/page/licensing/#CC%20Attribution*/}
                <svg
                  viewBox="0 0 24 24"
                  height={32}
                  width={32}
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15V13.9999H17.0762C17.5066 13.9999 17.8887 13.7245 18.0249 13.3161L18.4679 11.9871C18.6298 11.5014 18.2683 10.9999 17.7564 10.9999H15V8.99992C15 8.49992 15.5 7.99992 16 7.99992H18C18.5523 7.99992 19 7.5522 19 6.99992V6.31393C19 5.99091 18.7937 5.7013 18.4813 5.61887C17.1705 5.27295 16 5.27295 16 5.27295C13.5 5.27295 12 6.99992 12 8.49992V10.9999H10C9.44772 10.9999 9 11.4476 9 11.9999V12.9999C9 13.5522 9.44771 13.9999 10 13.9999H12V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
                    />
                  </g>
                </svg>
              </Link>
              <Link
                className="bg-[#ee6352] rounded-full grid place-items-center size-14 aspect-square"
                to="https://www.instagram.com/musikkforandrerliv/"
                >
                {/* Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={32}
                  width={32}
                  fill="#fff"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 flex flex-col gap-4 m-0 items-center text-center">
          <div className="flex gap-4">
            <Link className="underline" to="/privacy">
              {t('common.footer.privacyPolicy')}
            </Link>
            <Link className="underline" to="/terms">
              {t('common.footer.termsAndConditions')}
            </Link>
          </div>

          <p>© Musikkforandrerliv</p>
        </div>
      </section>
    </section>
  );
}

export default Footer;
