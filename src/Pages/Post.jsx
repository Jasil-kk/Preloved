import React, { useState } from "react";
import { AiFillCar, AiFillMobile } from "react-icons/ai";
import { RiMotorbikeFill, RiFridgeFill } from "react-icons/ri";
import { MdChair } from "react-icons/md";
import { IoShirt } from "react-icons/io5";
import { TbDog } from "react-icons/tb";
import { GiCarDoor } from "react-icons/gi";
import Ad from "../Components/styles-store/ad";
import AdCategory from "../Components/styles-store/adCategory";
import { Link } from "react-router-dom";

const Post = () => {
  const [show, setShow] = useState({});

  const handleClick = (id) => {
    const newShowState = {};
    newShowState[id] = true;
    setShow(newShowState);
  };

  return (
    <div className="w-full h-screen bg-slate-100 flex justify-center items-center flex-col">
      <h1 className="text-2xl sm:text-3xl font-bold font-poppins text-slate-900 mb-5">
        POST YOUR AD
      </h1>
      <div className="w-1/2 h-auto bg-blue-200 rounded-lg flex overflow-hidden">
        <div className="w-1/2 bg-black">
          <Ad
            handleClick={handleClick}
            id={"cars"}
            category={"Cars"}
            icon={<AiFillCar />}
          />
          <Ad
            handleClick={handleClick}
            id={"bikes"}
            category={"Bikes"}
            icon={<RiMotorbikeFill />}
          />
          <Ad
            handleClick={handleClick}
            id={"mobiles"}
            category={"Mobiles"}
            icon={<AiFillMobile />}
          />
          <Ad
            handleClick={handleClick}
            id={"electronics & Appliances"}
            category={"Electronics & Appliances"}
            icon={<RiFridgeFill />}
          />
          <Ad
            handleClick={handleClick}
            id={"spares"}
            category={"Commercial Vehicles & Spares"}
            icon={<GiCarDoor />}
          />
          <Ad
            handleClick={handleClick}
            id={"furniture"}
            category={"Furniture"}
            icon={<MdChair />}
          />
          <Ad
            handleClick={handleClick}
            id={"fashion"}
            category={"Fashion"}
            icon={<IoShirt />}
          />
          <Ad
            handleClick={handleClick}
            id={"pets"}
            category={"Pets"}
            icon={<TbDog />}
          />
        </div>
        <div className="w-1/2">
          <Link to={"/post/postform"}>
            {show["cars"] && <AdCategory AdCategory={"Cars"} />}
          </Link>

          {show["bikes"] && (
            <>
              <AdCategory AdCategory={"Motorcycles"} />
              <AdCategory AdCategory={"Scooters"} />
              <AdCategory AdCategory={"Spare Parts"} />
              <AdCategory AdCategory={"Bicycles"} />
            </>
          )}
          {show["mobiles"] && (
            <>
              <AdCategory AdCategory={"Mobile Phones"} />
              <AdCategory AdCategory={"Accessories"} />
              <AdCategory AdCategory={"Tablets"} />
            </>
          )}
          {show["electronics & Appliances"] && (
            <>
              <AdCategory AdCategory={"TVs, Video - Audio"} />
              <AdCategory AdCategory={"Kitchen & Other Appliances"} />
              <AdCategory AdCategory={"Computers & Laptops"} />
              <AdCategory AdCategory={"Cameras & Lenses"} />
              <AdCategory AdCategory={"Fridges"} />
              <AdCategory AdCategory={"ACs"} />
              <AdCategory AdCategory={"Washing Machines"} />
            </>
          )}
          {show["spares"] && (
            <>
              <AdCategory AdCategory={"Commercial & Other Vehicles"} />
              <AdCategory AdCategory={"Spare Parts"} />
            </>
          )}
          {show["furniture"] && (
            <>
              <AdCategory AdCategory={"Sofa & Dining"} />
              <AdCategory AdCategory={"Beds & Wardrobes"} />
              <AdCategory AdCategory={"Kids Furniture"} />
              <AdCategory AdCategory={"Home Decor & Garden"} />
            </>
          )}
          {show["fashion"] && (
            <>
              <AdCategory AdCategory={"Men"} />
              <AdCategory AdCategory={"Women"} />
              <AdCategory AdCategory={"Kids"} />
            </>
          )}
          {show["pets"] && (
            <>
              <AdCategory AdCategory={"Fishes & Aquarium"} />
              <AdCategory AdCategory={"Pet Food & Accessories"} />
              <AdCategory AdCategory={"Dogs"} />
              <AdCategory AdCategory={"Other Pets"} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
