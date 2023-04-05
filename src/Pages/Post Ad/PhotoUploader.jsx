import React, { useEffect, useState } from "react";
import PhotoBox from "../../Components/styles-store/PhotoBox";

const PhotoUploader = ({input,setInput}) => {
  const [inputValue, setInputValue] = useState();
console.log(inputValue);

  useEffect(()=> {
    setInput({...input,photos:inputValue})
  },[inputValue])
  
  return (
    <div className="p-5 border-b border-blue-500">
      <h2 className="text-2xl font-semibold text-slate-800">
        UPLOAD UPTO 5 PHOTOS
      </h2>
      <div className="w-96 mt-5 flex flex-wrap gap-5">
        <PhotoBox setInputValue={setInputValue}/>
        <PhotoBox setInputValue={setInputValue}/>
        <PhotoBox setInputValue={setInputValue}/>
        <PhotoBox setInputValue={setInputValue}/>
        <PhotoBox setInputValue={setInputValue}/>
        <PhotoBox setInputValue={setInputValue}/>
        <PhotoBox setInputValue={setInputValue}/>
        <PhotoBox setInputValue={setInputValue}/>
        <PhotoBox setInputValue={setInputValue}/>
        <PhotoBox setInputValue={setInputValue}/>
      </div>
    </div>
  );
};

export default PhotoUploader;
