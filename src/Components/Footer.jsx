import React from "react";
import logo from "../assets/Navbar/logo.svg";
import facebook from "../assets/Footer/facebook.svg";
import instagram from "../assets/Footer/instagram.svg";
import linkedin from "../assets/Footer/linkedin.svg";
import location from "../assets/Footer/locationer.svg";
import mail from "../assets/Footer/mail.svg";
import twitter from "../assets/Footer/twitter.svg";
import contact from "../assets/Footer/contact.svg";

const Footer = () => {
  return (
    <div className="w-full h-80 bg-transparent flex gap-20 font-outfit pl-40 pt-14">
      <div className="flex flex-col">
        <img className="w-[164px] h-[43px]" src={logo} alt="logo" />
        <p className="mt-5 font-normal text-sm leading-6 text-slate-600 w-[534px]">
          At Preloved, we understand that some of the best things in life are
          already out there, waiting to be discovered and appreciated. That's
          why we're dedicated to providing a platform that connects savvy
          shoppers with pre-loved items that have plenty of life left in them.
        </p>
        <div className="mt-4 pl-2 flex gap-6">
          <a href="https://www.facebook.com/profile.php?id=100059813913818">
            <img className="cursor-pointer" src={facebook} alt="facebook" />
          </a>
          <img className="cursor-pointer" src={twitter} alt="twitter" />
          <a href="https://www.linkedin.com/in/jasil-kk-92119b269/">
            <img className="cursor-pointer" src={linkedin} alt="linkedIn" />
          </a>
          <a href="https://www.instagram.com/_jasil_kk/">
            <img className="cursor-pointer" src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
      <div>
        <h2 className="font-bold text-lg text-slate-800">Pages</h2>
        <div className="mt-6 flex flex-col gap-5">
          <h3 className="font-normal text-sm text-slate-600"> Home it work</h3>
          <h3 className="font-normal text-sm text-slate-600">Pricing</h3>
          <h3 className="font-normal text-sm text-slate-600">Blog</h3>
          <h3 className="font-normal text-sm text-slate-600">Demo</h3>
        </div>
      </div>
      <div>
        <h2 className="font-bold text-lg text-slate-800">Service</h2>
        <div className="mt-6 flex flex-col gap-5">
          <h3 className="font-normal text-sm text-slate-600">Web Designing</h3>
          <h3 className="font-normal text-sm text-slate-600">Web Developing</h3>
          <h3 className="font-normal text-sm text-slate-600">UI/UX Design</h3>
        </div>
      </div>
      <div>
        <h2 className="font-bold text-lg text-slate-800">Contact</h2>
        <div className="mt-6 flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <img src={contact} alt="contact" />
            <h3 className="font-normal text-sm text-slate-600">
              (+91) 7034872522
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <img src={mail} alt="mail" />
            <h3 className="font-normal text-sm text-slate-600">
              jasikk2522@gmail.com
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <img className="ml-2" src={location} alt="location" />
            <h3 className="w-52 font-normal text-sm text-slate-600">
              2972 Westheimer Rd. Santa Ana, Illinois 85486{" "}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
