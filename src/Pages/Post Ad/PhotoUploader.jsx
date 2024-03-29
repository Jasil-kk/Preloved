import React, { useEffect, useState } from "react";
import PhotoBox from "../../Components/styles-store/PhotoBox";

  const PhotoUploader = ({input, setInput}) => {

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
      setInput(photos);
    }, [photos]);
  
    // const handleAddPhoto = (photo) => {
    //   setPhotos((prevPhotos) => [...prevPhotos, photo]);
    // };
  
    const handleAddPhoto = (photo) => {
      setPhotos( photo);
    };
  return (
    <div className="p-5 border-b border-blue-500">
      <h2 className="text-2xl font-semibold text-slate-800">
        UPLOAD UPTO 5 PHOTOS
      </h2>
      <div className="w-96 mt-5 flex flex-wrap gap-5">
        <PhotoBox setInputValue={handleAddPhoto}/>
        <PhotoBox setInputValue={handleAddPhoto}/>
        <PhotoBox setInputValue={handleAddPhoto}/>
        <PhotoBox setInputValue={handleAddPhoto}/>
        <PhotoBox setInputValue={handleAddPhoto}/>
        <PhotoBox setInputValue={handleAddPhoto}/>
        <PhotoBox setInputValue={handleAddPhoto}/>
        <PhotoBox setInputValue={handleAddPhoto}/>
        <PhotoBox setInputValue={handleAddPhoto}/>
        <PhotoBox setInputValue={handleAddPhoto}/>
      </div>
    </div>
  );
};

export default PhotoUploader;
