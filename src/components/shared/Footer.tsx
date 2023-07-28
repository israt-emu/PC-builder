import {FaFacebook, FaInstagram, FaTwitter, FaPinterest} from "react-icons/fa";
const Footer = () => {
  return (
    <div className=" py-6 bg-primary text-background ">
      <div className=" w-11/12 mx-auto grid justify-centerlg:justify-between">
        <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
          <span>©2023 All rights reserved</span>
          <a rel="noopener noreferrer" href="#">
            <span>Privacy policy</span>
          </a>
          <a rel="noopener noreferrer" href="#">
            <span>Terms of service</span>
          </a>
        </div>
        <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
          <a rel="noopener noreferrer" href="#" title="Email" className="flex items-center justify-center w-10 h-10 rounded-full text-xl">
            <FaFacebook />
          </a>
          <a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center justify-center w-10 h-10 rounded-full text-xl">
            <FaInstagram />
          </a>
          <a rel="noopener noreferrer" href="#" title="GitHub" className="flex items-center justify-center w-10 h-10 rounded-full text-xl">
            <FaPinterest />
          </a>
          <a rel="noopener noreferrer" href="#" title="GitHub" className="flex items-center justify-center w-10 h-10 rounded-full text-xl">
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
