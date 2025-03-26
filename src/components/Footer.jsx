import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  const [email, setEmail] = useState('');

  function onEmailSubmit(event) {
    event.preventDefault();
    setEmail(event.target.value);
    console.log(event.target.value);
  }

  return (
    <section className="font-sans">
      {/* Subsrcibe section */}
      <section className="h-[364px] bg-(--color-sunset-red) flex justify-center items-center">
        <div className="grid gap-8 py-20 text-center text-black max-w-[480px] m-10 sm:m-0">
          <div className="flex flex-col justify-center gap-6">
            <h3 className="text-[32px]">Subscribe to our newsletter!</h3>
            <p className="flex flex-wrap">
              Join our newsletter today, to stay updated on our events and
              projects!
            </p>
          </div>

          <form
            className="flex flex-wrap sm:flex-nowrap gap-4 justify-center"
            onSubmit={onEmailSubmit}
          >
            <input
              type="text"
              value={email}
              placeholder="example@example.com"
              className="h-[49px] w-full rounded-lg border-1 bg-white p-4 sm:w-[306px] md:h-[57px]"
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
            />
            <button className="h-[49px] md:h-[57px] w-full sm:w-[158px] bg-white text-(--color-sunset-red) rounded-lg font-semibold text-2xl active:bg-(--color-sunset-red) active:text-white hover:bg-(--color-sunset-red) hover:text-white focus:bg-(--color-sunset-red) focus:text-white focus:border focus:border-white">
              Sign Up
            </button>
          </form>
        </div>
      </section>

      {/* Links */}
      <section className="h-[1069px] bg-(--color-dark-green) text-white md:h-[553px] flex flex-col items-center relative">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center mt-22 md:mt-24">
          {/* Placeholder for logo */}
          <div className="w-[170px] h-[170px] lg:h-[250px] lg:w-[250px] col-start-1">
            LOGO
          </div>

          <div className="text-2xl flex flex-col col-start-1 md:col-start-2 gap-8">
            <a>{t('common.footer.aboutUs')}</a>
            <a>{t('common.footer.news')}</a>
            <a>{t('common.footer.events')}</a>
          </div>
          <div className="text-2xl flex flex-col col-start-1 md:col-start-3 gap-8">
            <a>{t('common.footer.gallery')}</a>
            <a>{t('common.footer.ourWork')}</a>
            <a>{t('common.footer.contactUs')}</a>
          </div>

          <div className="col-start-2 md:col-start-4 row-start-1 mt-12 gap-4 flex flex-col">
            <button className="bg-(--color-sunset-red) h-[57px] w-[147px] font-semibold text-white text-2xl rounded-lg focus:border-2 col-start-1 md:col-start-4 md:row-start-1">
              {t('common.buttons.donate')}
            </button>

            <p className="uppercase text-2xl font-bold">
              {t('common.footer.followUs')}
            </p>
            <div>
              <a>Facebook</a>
              <a>Instagram</a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 flex flex-col gap-4 m-0 items-center text-center">
          <div>
            <a>{t('common.footer.privacyPolicy')}</a>
            <a>{t('common.footer.termsAndConditions')}</a>
          </div>

          <p>© Musikkforandrerliv</p>
        </div>
      </section>
    </section>
  );
}

export default Footer;
