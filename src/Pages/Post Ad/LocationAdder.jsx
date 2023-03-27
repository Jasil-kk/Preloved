import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Selector from "../../Components/styles-store/selector";

const LocationAdder = ({input,setInput}) => {
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputValue(e);
    // dispatch(saveInput({ district: newvalue }));
    setInput({...input,district:e})
  };

  const handleChange2 = (e) => {
    setInputValue2(e);
    // dispatch(saveInput({ city: newvalue2 }));
    setInput({...input,city:e})
  };

  const Districts = [
    "Kozhikkode",
    "Malappuram",
    "Wayanad",
    "kasarkode",
    "Thiruvanathapuram",
    "Kannur",
    "Thrissur",
    "Eranakulam",
    "Alappuzha",
    "Pathanmthitta",
    "Idukki",
    "Palakkad",
    "Kottayam",
  ];
  const City = [
    "Malappuram",
    "Kozhikkode",
    "Kakkodi",
    "Kottakkal",
    "Tirur",
    "Tanur",
    "Ponnani",
    "Kondotty",
    "Edappal",
    "Chalakkudy",
    "Kochi",
    "Trivantrum",
    "Mannarkad",
    "Pandikkad",
    "Melattur",
    "Panakkad",
    "Kunnummal",
    "Kunnamkulam",
    "Pookotur",
    "Chelari",
  ];

  return (
    <div className="p-5 border-b border-blue-500">
      <h2 className="text-2xl font-semibold text-slate-800 ">
        CONFIRM YOUR LOCATION
      </h2>
      <Selector
        brands={Districts}
        label={"District *"}
        onChange={handleChange}
        value={inputValue}
      />
      <Selector
        brands={City}
        label={"City *"}
        onChange={handleChange2}
        value={inputValue2}
      />
    </div>
  );
};

export default LocationAdder;
