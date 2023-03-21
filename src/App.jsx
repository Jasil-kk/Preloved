import { Routes, Route } from "react-router-dom";
import "./App.css";
import ChangePassword from "./Components/ChangePassword";
import ForgetPassword from "./Components/ForgetPassword";
import LoginPage from "./Components/LoginPage";
import RegisterPage from "./Components/RegisterPage";
import BicyclesDetails from "./Pages/DetailsForm/Bikes/BicyclesDetails";
import MotorCycleDetails from "./Pages/DetailsForm/Bikes/MotorCycleDetails";
import ScootersDetails from "./Pages/DetailsForm/Bikes/ScootersDetails";
import SparePartsDetails from "./Pages/DetailsForm/Bikes/SparePartsDetails";
import CarsDetails from "./Pages/DetailsForm/Cars/CarsDetails";
import TVsVideoAudio from "./Pages/DetailsForm/Electronics/TVsVideoAudio";
import FashionDetails from "./Pages/DetailsForm/Fashion/FashionDetails";
import SofaDetails from "./Pages/DetailsForm/Furniture/SofaDetails";
import AccessoriesDetails from "./Pages/DetailsForm/Mobiles/AccessoriesDetails";
import MobilePhoneDetails from "./Pages/DetailsForm/Mobiles/MobilePhoneDetails";
import TabletsDetails from "./Pages/DetailsForm/Mobiles/TabletsDetails";
import PetsDetails from "./Pages/DetailsForm/Pets/PetsDetails";
import CommercialVehicles from "./Pages/DetailsForm/Spare/CommercialVehicles";
import SpareParts from "./Pages/DetailsForm/Spare/SpareParts";
import EditProfile from "./Pages/EditProfile";
import Pages from "./Pages/Pages";
import Post from "./Pages/Post";
import Dashboard from "./Pages/SinglePages/AdminPage/Dashboard";
import SinglePage from "./Pages/SinglePages/SinglePage";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Pages />} />
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/forgetpassword" element={<ForgetPassword/>}/>
        <Route path="/changepassword" element={<ChangePassword/>}/>
        <Route path="/profile" element={<EditProfile/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/singlepage" element={<SinglePage/>}/>
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
        <Route path="/post/furniture" element={<SofaDetails/>}/>
        <Route path="/post/fashion" element={<FashionDetails/>}/>
        <Route path="/post/pets" element={<PetsDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
