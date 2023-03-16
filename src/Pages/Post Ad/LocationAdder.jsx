import React, { useState } from "react";
import Selector from "../../Components/styles-store/selector";

const LocationAdder = () => {

  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");

  const handleChange = (e,newvalue) => {
    setInputValue(newvalue);
  }
  console.log(inputValue);

  const handleChange2 = (e,newvalue2) => {
    setInputValue2(newvalue2);
  }
  console.log(inputValue2);

  const Districts = [
     "Kozhikkode" ,
     "Malappuram" ,
     "Wayanad" ,
     "kasarkode" ,
     "Thiruvanathapuram" ,
     "Kannur" ,
     "Thrissur" ,
     "Eranakulam" ,
     "Alappuzha" ,
     "Pathanmthitta" ,
     "Idukki" ,
     "Palakkad" ,
     "Kottayam" ,
  ];
  const City = [
     "Malappuram" ,
     "Kozhikkode" ,
     "Kakkodi" ,
     "Kottakkal" ,
     "Tirur" ,
     "Tanur" ,
     "Ponnani" ,
     "Kondotty" ,
     "Edappal" ,
     "Chalakkudy" ,
     "Kochi" ,
     "Trivantrum" ,
     "Mannarkad" ,
     "Pandikkad" ,
     "Melattur" ,
     "Panakkad" ,
     "Kunnummal" ,
     "Kunnamkulam" ,
     "Pookotur" ,
     "Chelari" ,
  ];

  return (
    <div className="p-5 border-b border-blue-500">
      <h2 className="text-2xl font-semibold text-slate-800 ">
        CONFIRM YOUR LOCATION
      </h2>
      <Selector brands={Districts} label={"District *"} onChange={handleChange} value={inputValue}/>
      <Selector brands={City} label={"City *"} onChange={handleChange2} value={inputValue2}/>
    </div>
  );
};

export default LocationAdder;
