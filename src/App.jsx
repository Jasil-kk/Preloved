import { Routes, Route } from "react-router-dom";
import "./App.css";
import BicyclesDetails from "./Pages/DetailsForm/Bikes/BicyclesDetails";
import MotorCycleDetails from "./Pages/DetailsForm/Bikes/MotorCycleDetails";
import ScootersDetails from "./Pages/DetailsForm/Bikes/ScootersDetails";
import SparePartsDetails from "./Pages/DetailsForm/Bikes/SparePartsDetails";
import CarsDetails from "./Pages/DetailsForm/Cars/CarsDetails";
import TVsVideoAudio from "./Pages/DetailsForm/Electronics/TVsVideoAudio";
import AccessoriesDetails from "./Pages/DetailsForm/Mobiles/AccessoriesDetails";
import MobilePhoneDetails from "./Pages/DetailsForm/Mobiles/MobilePhoneDetails";
import TabletsDetails from "./Pages/DetailsForm/Mobiles/TabletsDetails";
import CommercialVehicles from "./Pages/DetailsForm/Spare/CommercialVehicles";
import SpareParts from "./Pages/DetailsForm/Spare/SpareParts";
import Pages from "./Pages/Pages";
import Post from "./Pages/Post";
import PostForm from "./Pages/PostForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Pages />} />
        <Route path="/post" element={<Post />} />
        <Route path="/post/cars" element={<CarsDetails />} />
        <Route path="/post/motorcycle" element={<MotorCycleDetails />} />
        <Route path="/post/scooter" element={<ScootersDetails />} />
        <Route path="/post/sparepart" element={<SparePartsDetails />} />
        <Route path="/post/bicycle" element={<BicyclesDetails />} />
        <Route path="/post/mobilephone" element={<MobilePhoneDetails />} />
        <Route path="/post/accessories" element={<AccessoriesDetails />} />
        <Route path="/post/tablet" element={<TabletsDetails/>}/>
        <Route path="/post/electronic&appliances" element={<TVsVideoAudio/>}/>
        <Route path="/post/commercial-spare" element={<CommercialVehicles/>}/>
        <Route path="/post/spare" element={<SpareParts/>}/>
      </Routes>
    </div>
  );
}

export default App;
