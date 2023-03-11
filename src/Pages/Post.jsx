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
      <div className="w-1/2 h-auto rounded-lg flex">
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
          <Link to={"/post/cars"}>
            {show["cars"] && <AdCategory AdCategory={"Cars"} />}
          </Link>

          {show["bikes"] && (
            <>
              <Link to={"/post/motorcycle"}>
                <AdCategory AdCategory={"Motorcycles"} />
              </Link>
              <Link to={"/post/scooter"}>
                <AdCategory AdCategory={"Scooters"} />
              </Link>
              <Link to={"/post/sparepart"}>
                <AdCategory AdCategory={"Spare Parts"} />
              </Link>
              <Link to={"/post/bicycle"}>
                <AdCategory AdCategory={"Bicycles"} />
              </Link>
            </>
          )}
          {show["mobiles"] && (
            <>
              <Link to={"/post/mobilephone"}>
                <AdCategory AdCategory={"Mobile Phones"} />
              </Link>
              <Link to={"/post/accessories"}>
                <AdCategory AdCategory={"Accessories"} />
              </Link>
              <Link to={"/post/tablet"}>
                <AdCategory AdCategory={"Tablets"} />
              </Link>
            </>
          )}
          {show["electronics & Appliances"] && (
            <>
              <Link to={"/post/electronic&appliances"}>
                <AdCategory AdCategory={"TVs, Video - Audio"} />
                <AdCategory AdCategory={"Kitchen & Other Appliances"} />
                <AdCategory AdCategory={"Computers & Laptops"} />
                <AdCategory AdCategory={"Cameras & Lenses"} />
                <AdCategory AdCategory={"Fridges"} />
                <AdCategory AdCategory={"ACs"} />
                <AdCategory AdCategory={"Washing Machines"} />
              </Link>
            </>
          )}
          {show["spares"] && (
            <>
              <Link to={"/post/commercial-spare"}>
                <AdCategory AdCategory={"Commercial & Other Vehicles"} />
              </Link>
              <Link to={"/post/spare"}>
                <AdCategory AdCategory={"Spare Parts"} />
              </Link>
            </>
          )}
          {show["furniture"] && (
            <>
              <Link to={"/post/furniture"}>
                <AdCategory AdCategory={"Sofa & Dining"} />
                <AdCategory AdCategory={"Beds & Wardrobes"} />
                <AdCategory AdCategory={"Kids Furniture"} />
                <AdCategory AdCategory={"Home Decor & Garden"} />
              </Link>
            </>
          )}
          {show["fashion"] && (
            <>
              <Link to={"/post/fashion"}>
                <AdCategory AdCategory={"Men"} />
                <AdCategory AdCategory={"Women"} />
                <AdCategory AdCategory={"Kids"} />
              </Link>
            </>
          )}
          {show["pets"] && (
            <>
              <Link to={"/post/pets"}>
                <AdCategory AdCategory={"Fishes & Aquarium"} />
                <AdCategory AdCategory={"Pet Food & Accessories"} />
                <AdCategory AdCategory={"Dogs"} />
                <AdCategory AdCategory={"Other Pets"} />
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
