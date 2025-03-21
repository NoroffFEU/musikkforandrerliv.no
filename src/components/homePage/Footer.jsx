import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import logo from "assets/placeholder-images/logo.png";
import facebook from "assets/images/svgs/facebook.svg";

function Footer() {
  const { register, handleSubmit } = useForm();

  function onFormSubmit(data) {
    console.log(data);
  }
  return (
    <section>
      <section className="">
        <h3>Subscribe to our newsletter!</h3>
        <p>
          Join our newsletter today, to stay updated on our events and projects!
        </p>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <input
            type="text"
            placeholder="example@example.com"
            {...register("email", {
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address"
              }
            })}
          />
          <button>Sign Up</button>
        </form>
      </section>

      <section>
        <div>
          <img src={logo} alt="Musikk Forandrer Liv logo" />
          <div>
            <Link>About Us</Link>
            <Link>News</Link>
            <Link>Events</Link>
            <Link>Galley</Link>
            <Link>Our Work</Link>
            <Link>Contact Us</Link>
          </div>

          <div>
            <button>Donate</button>
            <p>Follow us</p>
            <div>
              <Link>{facebook}</Link>
              <Link>Instagram</Link>
            </div>
          </div>
        </div>
        <div>
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
