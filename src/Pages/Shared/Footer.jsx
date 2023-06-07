import { Link } from "react-router-dom";
import { BsFacebook, BsGithub, BsTwitter } from "react-icons/bs";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { MdLocationOn, MdOutlineMailOutline } from "react-icons/md";
const Footer = () => {
  return (
    <footer className="footer p-10 bg-[#111827] text-base-content">
      <div className="flex items-center mb-4">
        <h2 className="text-xl text-primary font-black">
          CampSporty <br />
          Sports Academy
        </h2>
      </div>
      <div>
        <span className="footer-title text-primary opacity-100">Services</span>
        <Link to="#" className="link link-hover link-accent">
          Sports Training
        </Link>
        <Link to="#" className="link link-hover link-accent">
          Fitness Programs
        </Link>
        <Link to="#" className="link link-hover link-accent">
          Event Management
        </Link>
        <Link to="#" className="link link-hover link-accent">
          Team Building
        </Link>
      </div>

      <div>
        <span className="footer-title text-primary opacity-100">
          Information
        </span>
        <Link to="/about" className="link link-hover link-accent">
          About CampSporty
        </Link>
        <Link to="/contact" className="link link-hover link-accent">
          Contact Us
        </Link>
        <Link to="/faq" className="link link-hover link-accent">
          FAQ
        </Link>
        <Link to="/terms" className="link link-hover link-accent">
          Terms and Conditions
        </Link>
      </div>

      <div className="">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} CampSporty. All rights reserved.
        </p>
        <p className="text-sm text-gray-400">
          Made with love by{" "}
          <Link to="#" className="underline">
            CampSporty Team
          </Link>
        </p>
        <p className="flex items-center justify-center gap-3 mt-3">
          <MdLocationOn /> Charkhai, BeaniBazar, Sylhet
        </p>
        <p className="flex items-center justify-center gap-3 mt-3">
          <MdOutlineMailOutline /> rashidaminur104@gmail.com
        </p>
        <div className="flex space-x-4 mt-4">
          <a
            href="https://www.facebook.com/aminurrashidrezaarr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFacebook />
          </a>
          <a
            href="https://www.instagram.com/reza_8k/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare />
          </a>
          <a
            href="https://github.com/reza107-hub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub />
          </a>
          <a
            href="https://twitter.com/Reza6f9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/aminur-rashid-reza-213a00266"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
