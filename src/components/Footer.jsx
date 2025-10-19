import React, { useEffect, useState } from 'react';

import { Link, NavLink } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import { RiFacebookBoxLine, RiInstagramLine } from 'react-icons/ri';

import Button from './Button';
import SelectLanguageButton from './lang/select-language-button';
import showMessage from './showMessage';
import Logo from '/assets/placeholder-images/logo.png';

function Footer() {
  const { t, i18n } = useTranslation();

  // ===== UI-state =====
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null); // 'error' | 'success' | null
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // ===== Submit =====
  async function onEmailSubmit(e) {
    e.preventDefault();
    setStatus(null);
    setMessage('');

    // E-mail validation
    const value = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value || !emailRegex.test(value)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      showMessage(message, status);
      return;
    }

    setLoading(true);

    try {
        // ===== Back-end function needed for API call =====
      const res = await fetch('/.netlify/functions/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          firstName: '',
          lastName: '',
          lang: i18n?.language || 'en',
        }),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data.status !== 'error') {
        const already =
          data.status === 'already_subscribed' ||
          data.error?.includes('Member Exists');
        setStatus('success');
        setMessage(
          already
            ? 'You are already subscribed.'
            : 'Thank you! Please check your email to confirm your subscription.',
        );
        setEmail('');
      } else {
        setStatus('error');
        setMessage(
          data.error ||
            data.message ||
            'Something went wrong. Please try again.',
        );
      }
    } catch (error) {
      setStatus('error');
      setMessage(error.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }

    // ===== Fake send for testing =====
    // await new Promise((r) => setTimeout(r, 600));
    // setStatus('success');
    // setMessage(
    //   'Thank you! Please check your email to confirm your subscription.',
    // );
    // setEmail('');
    // setLoading(false);
    return;
  }

  useEffect(() => {
    if (status && message) {
      showMessage(message, status);
    }
  }, [status, message]);

  const [isBelowMd, setIsBelowMd] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : true,
  );
  useEffect(() => {
    const handleResize = () => setIsBelowMd(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer className="font-sans">
      <section className="w-full bg-[var(--color-sunset-red)] px-6 py-16 flex flex-col items-center justify-center text-center text-black">
        <div className="max-w-[720px] w-full grid gap-6">
          <h3 className="text-[32px] font-semibold">
            {t('common.newsletter.title') || 'Sign up for our newsletter!'}
          </h3>

          <p className="leading-relaxed text-base md:text-lg">
            {t('common.newsletter.description') ||
              'Join our newsletter today to get the latest updates on our events and projects!'}
          </p>

          <form
            onSubmit={onEmailSubmit}
            className="mt-4 flex flex-col sm:flex-row items-stretch justify-center gap-4"
            noValidate
          >
            <input
              type="email"
              inputMode="email"
              autoComplete="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status) {
                  setStatus(null);
                  setMessage('');
                }
              }}
              placeholder="example@example.com"
              className={[
                'h-[49px] md:h-[57px] w-full sm:w-[320px] rounded-lg border bg-white px-4',
                'text-gray-900 placeholder-gray-500 border-gray-200',
                'focus:outline-none focus:ring-2 focus:ring-[var(--color-dark-green)]',
              ].join(' ')}
              required
              aria-invalid={status === 'error'}
              aria-describedby="newsletter-feedback"
            />

            <button
              type="submit"
              disabled={loading}
              aria-busy={loading}
              className="h-[49px] md:h-[57px] w-full sm:w-[160px] rounded-lg bg-white text-[var(--color-sunset-red)] text-xl font-semibold transition-colors hover:bg-[var(--color-hover-red)] hover:text-white focus:ring-2 focus:ring-white disabled:opacity-60"
            >
              {loading ? (
                <span className="inline-flex items-center justify-center gap-2">
                  <span className="h-4 w-4 rounded-full border-2 border-[var(--color-sunset-red)] border-t-transparent animate-spin" />
                  Loading...
                </span>
              ) : (
                t('common.buttons.signUp') || 'Sign up'
              )}
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
            <div className="hidden md:flex md:col-span-3 md:justify-self-end flex-col items-center gap-8 w-full">
              <NavLink
                to="/support"
                className="w-full text-center bg-[var(--color-sunset-red)] hover:bg-[var(--color-hover-red)] py-3 font-bold uppercase tracking-wide text-white text-2xl rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
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
