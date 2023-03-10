import React from "react";
import Selector from "../../Components/styles-store/selector";

const LocationAdder = () => {
  const Districts = [
    { label: "Kozhikkode" },
    { label: "Malappuram" },
    { label: "Wayanad" },
    { label: "kasarkode" },
    { label: "Thiruvanathapuram" },
    { label: "Kannur" },
    { label: "Thrissur" },
    { label: "Eranakulam" },
    { label: "Alappuzha" },
    { label: "Pathanmthitta" },
    { label: "Idukki" },
    { label: "Palakkad" },
    { label: "Kottayam" },
  ];
  const City = [
    { label: "Malappuram" },
    { label: "Kozhikkode" },
    { label: "Kakkodi" },
    { label: "Kottakkal" },
    { label: "Tirur" },
    { label: "Tanur" },
    { label: "Ponnani" },
    { label: "Kondotty" },
    { label: "Edappal" },
    { label: "Chalakkudy" },
    { label: "Kochi" },
    { label: "Trivantrum" },
    { label: "Mannarkad" },
    { label: "Pandikkad" },
    { label: "Melattur" },
    { label: "Panakkad" },
    { label: "Kunnummal" },
    { label: "Kunnamkulam" },
    { label: "Pookotur" },
    { label: "Chelari" },
];

  return (
    <div className="p-5 border-b border-blue-500">
      <h2 className="text-2xl font-semibold text-slate-800 ">
        CONFIRM YOUR LOCATION
      </h2>
      <Selector brands={Districts} label={"District *"} />
      <Selector brands={City} label={"City *"} />
    </div>
  );
};

export default LocationAdder;
