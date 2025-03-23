import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
// import logo from "/assets/placeholder-images/logo.png";
// import facebook from "/assets/images/svgs/facebook.svg";

function Footer() {
  const { register, handleSubmit } = useForm();

  function onFormSubmit(data) {
    console.log(data);
  }

  return (
    <section className="font-sans">
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
            onSubmit={handleSubmit(onFormSubmit)}
          >
            <input
              type="text"
              placeholder="example@example.com"
              className="h-[49px] w-full rounded-lg border-1 bg-white p-4 sm:w-[306px] md:h-[57px]"
              {...register("email", {
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address"
                }
              })}
            />
            <button className="h-[49px] md:h-[57px] w-full sm:w-[158px] bg-white text-(--color-sunset-red) rounded-lg font-semibold text-2xl active:bg-(--color-sunset-red) active:text-white hover:bg-(--color-sunset-red) hover:text-white focus:bg-(--color-sunset-red) focus:text-white focus:border focus:border-white">
              Sign Up
            </button>
          </form>
        </div>
      </section>

      <section className="h-[1069px] bg-(--color-dark-green) text-white md:h-[553px] flex flex-col items-center relative">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center mt-22 md:mt-24">
          <div>LOGO</div>
          {/* <img src={logo} alt="Musikk Forandrer Liv logo" className="w-[170px] h-[170px] lg:h-[250px] lg:w-[250px] col-start-1" /> */}
          <div className="text-2xl flex flex-col col-start-1 md:col-start-2 gap-8">
            <Link>About Us</Link>
            <Link>News</Link>
            <Link>Events</Link>
          </div>
          <div className="text-2xl flex flex-col col-start-1 md:col-start-3 gap-8">
            <Link>Gallery</Link>
            <Link>Our Work</Link>
            <Link>Contact Us</Link>
          </div>

          <div className="col-start-2 md:col-start-4 row-start-1 mt-12 gap-4 flex flex-col">
            <button className="bg-(--color-sunset-red) h-[57px] w-[147px] font-semibold text-white text-2xl rounded-lg focus:border-2 col-start-1 md:col-start-4 md:row-start-1">
              Donate
            </button>

            <p className="uppercase text-2xl font-bold">Follow us</p>
            <div>
              <Link>Facebook</Link>
              <Link>Instagram</Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 flex flex-col gap-4 m-0 items-center text-center">
          <div>
            <Link>Privacy Policy</Link>
            <Link>Terms and Conditions</Link>
          </div>

          <p>© Musikkforandrerliv</p>
        </div>
      </section>
    </section>
  );
}

export default Footer;
