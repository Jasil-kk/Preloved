import React from "react";
import wtsp from "../assets/whatsapp.svg";
import git from "../assets/github.svg";
import insta from "../assets/instagram.svg";
import fb from "../assets/facebook.svg";


const Footer = () => {
  return (
    <div className="w-full h-80 mt-16 pt-10 bg-gray-400 text-slate-900 flex flex-wrap justify-around relative font-poppins">
      <h1 className="text-2xl font-semibold">Olx-Clone</h1>
      <div>
        <h2 className="text-xl font-semibold ">About Us</h2>
        
      </div>
      <div className="flex flex-col mt-16">
        <span className="text-xl font-semibold">Follow Us</span>
        <span className="flex gap-2 mt-1">
        <img className="w-7 cursor-pointer" src={insta} alt="insta" />
        <img className="w-7 cursor-pointer" src={wtsp} alt="wtsp" />
        <img className="w-7 cursor-pointer" src={fb} alt="fb" />
        <img className="w-7 cursor-pointer" src={git} alt="git" />
        </span>
      </div>
      <p className="absolute bottom-3 left-64">© 2023 Olx-Clone™. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
