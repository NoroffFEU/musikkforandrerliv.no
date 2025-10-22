import React, { useEffect, useState } from 'react';

import { Link, NavLink } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import { RiFacebookBoxLine, RiInstagramLine } from 'react-icons/ri';

import Button from './Button';
import SelectLanguageButton from './lang/select-language-button';
import Logo from '/assets/placeholder-images/logo.png';

function Footer() {
  const { t } = useTranslation();

  const [email, setEmail] = useState('');
  const [isBelowMd, setIsBelowMd] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : true,
  );

  function onEmailSubmit(e) {
    e.preventDefault();
  }

  useEffect(() => {
    const handleResize = () => setIsBelowMd(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer className="font-sans">
      {/* ───────── Newsletter ───────── */}
      <section className="w-full bg-[var(--color-sunset-red)] px-6 py-16 flex flex-col items-center justify-center text-center text-black">
        <div className="max-w-[720px] w-full grid gap-6">
          <h3 className="text-[32px] font-semibold">
            {t('common.newsletter.title') || 'Subscribe to our newsletter!'}
          </h3>
          <p className="leading-relaxed text-base md:text-lg">
            {t('common.newsletter.description') ||
              'Join our newsletter today to stay updated on our events and projects!'}
          </p>
          <form
            onSubmit={onEmailSubmit}
            className="mt-4 flex flex-col sm:flex-row items-stretch justify-center gap-4"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@example.com"
              className="h-[49px] md:h-[57px] w-full sm:w-[320px] rounded-lg border border-gray-200 bg-white px-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-hover-red)]"
              required
            />
            <button
              type="submit"
              className="h-[49px] md:h-[57px] w-full sm:w-[160px] rounded-lg bg-white text-[var(--color-sunset-red)] text-xl font-semibold transition-colors hover:bg-[var(--color-hover-red)] hover:text-white focus:ring-2 focus:ring-white"
            >
              {t('common.buttons.signUp') || 'Sign Up'}
            </button>
          </form>
        </div>
      </section>

      {/* ───────── Footer Main ───────── */}
      <section className="w-full bg-[var(--color-dark-green)] text-white flex items-center">
        <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10 py-20 md:py-28">
          {/* MOBILE-ONLY: Logo + Follow/Language side-by-side */}
          <div className="md:hidden mb-10 flex items-center justify-between gap-6">
            <img
              src={Logo}
              alt="Musikkforandrerliv Logo"
              className="aspect-square w-[150px] rounded-full object-cover"
            />
            <div className="flex flex-col items-center gap-3">
              <p className="uppercase font-bold tracking-wide text-lg">
                {t('common.footer.followUs') || 'Follow us'}
              </p>

              <div className="flex items-center gap-4">
                <Button
                  href="#"
                  isExternalLink
                  aria-label="Facebook"
                  size="normal"
                  variant="primary"
                  className="flex h-[52px] w-[52px] items-center justify-center !rounded-full !p-1 !text-3xl"
                >
                  <RiFacebookBoxLine />
                </Button>
                <Button
                  href="#"
                  isExternalLink
                  aria-label="Instagram"
                  size="normal"
                  variant="primary"
                  className="flex h-[52px] w-[52px] items-center justify-center !rounded-full !p-1 !text-3xl"
                >
                  <RiInstagramLine />
                </Button>
              </div>

              {/* Language — mobile only */}
              <div className="md:hidden mt-2">
                <SelectLanguageButton className="!outline-none !border-none !shadow-none focus:!outline-none focus:!ring-0" />
              </div>
            </div>
          </div>

          {/* GRID (desktop layout) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-12 items-center">
            {/* Logo — desktop only */}
            <div className="hidden md:flex md:col-span-3 justify-start">
              <img
                src={Logo}
                alt="Musikkforandrerliv Logo"
                className="aspect-square w-[190px] rounded-full object-cover"
              />
            </div>

            {/* Links center */}
            <nav className="md:col-span-6 flex justify-center md:justify-center w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 sm:gap-x-32 text-left w-full">
                <ul className="flex flex-col gap-8 text-xl sm:text-2xl ml-2 md:ml-0">
                  <li>
                    <Link
                      to="/about"
                      className="hover:underline hover:text-gray-300"
                    >
                      {t('common.footer.aboutUs') || 'About Us'}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/news#latestNewsSection"
                      className="hover:underline hover:text-gray-300"
                    >
                      {t('common.footer.news') || 'News'}
                    </Link>
                  </li>
                  <li className="mb-6 sm:mb-0">
                    <Link
                      to="/news#eventsSection"
                      className="hover:underline hover:text-gray-300"
                    >
                      {t('common.footer.events') || 'Events'}
                    </Link>
                  </li>
                </ul>

                <ul className="flex flex-col gap-8 text-xl sm:text-2xl ml-2 md:ml-0">
                  <li>
                    <Link
                      to="/#gallerySection"
                      className="hover:underline hover:text-gray-300"
                    >
                      {t('common.footer.gallery') || 'Gallery'}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/work"
                      className="hover:underline hover:text-gray-300"
                    >
                      {t('common.footer.ourWork') || 'Our work'}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="hover:underline hover:text-gray-300"
                    >
                      {t('common.footer.contactUs') || 'Contact Us'}
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>

            {/* Donate + Follow — desktop only (no Language here) */}
            <div className="hidden md:flex md:col-span-3 md:justify-self-end flex-col items-center gap-8">
              <NavLink
                to="/support"
                className="w-[240px] text-center bg-[var(--color-sunset-red)] hover:bg-[var(--color-hover-red)] py-3 font-bold uppercase tracking-wide text-white text-2xl rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {t('common.buttons.donate') || 'Donate'}
              </NavLink>

              <div className="flex flex-col items-center gap-4">
                <p className="uppercase text-2xl font-bold tracking-wide">
                  {t('common.footer.followUs') || 'Follow us'}
                </p>
                <div className="flex items-center gap-6">
                  <Button
                    href="#"
                    isExternalLink
                    aria-label="Facebook"
                    size="normal"
                    variant="primary"
                    className="flex h-14 w-14 items-center justify-center !rounded-full !p-1 !text-3xl"
                  >
                    <RiFacebookBoxLine />
                  </Button>
                  <Button
                    href="#"
                    isExternalLink
                    aria-label="Instagram"
                    size="normal"
                    variant="primary"
                    className="flex h-14 w-14 items-center justify-center !rounded-full !p-1 !text-3xl"
                  >
                    <RiInstagramLine />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Donate (mobile only) */}
          <div className="md:hidden mt-10">
            <NavLink
              to="/support"
              className="inline-block rounded-lg bg-[var(--color-sunset-red)] px-6 py-3 text-2xl font-semibold text-white hover:bg-[var(--color-hover-red)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {t('common.buttons.donate') || 'Donate'}
            </NavLink>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <section className="w-full bg-[var(--color-dark-green)] text-white">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 pt-4 pb-8 flex flex-col items-center gap-3">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 whitespace-nowrap text-sm md:text-base">
            <Link to="#" className="underline hover:text-gray-300">
              {t('common.footer.privacyPolicy') || 'Privacy Policy'}
            </Link>
            <Link to="#" className="underline hover:text-gray-300">
              {t('common.footer.termsAndConditions') || 'Terms and Conditions'}
            </Link>
          </div>
          <p className="text-center">© Musikkforandrerliv</p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
