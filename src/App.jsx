import { Routes, Route } from "react-router-dom";
import "./App.css";
import ChangePassword from "./Components/ChangePassword";
import ForgetPassword from "./Components/ForgetPassword";
import LoginPage from "./Components/LoginPage";
import RegisterPage from "./Components/RegisterPage";
import BicyclesDetails from "./Pages/DetailsForm/Bikes/BicyclesDetails";
import MotorCycleDetails from "./Pages/DetailsForm/Bikes/MotorCycleDetails";
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
import CatSingleView from "./Pages/SinglePages/AdminPage/Category/CatSingleView";
import CreateCategory from "./Pages/SinglePages/AdminPage/Category/CreateCategory";
import Dashboard from "./Pages/SinglePages/AdminPage/Dashboard";
import Product from "./Pages/SinglePages/AdminPage/Product/Product";
import SinglePage from "./Pages/SinglePages/SinglePage";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Pages />} />
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/forgetpassword" element={<ForgetPassword/>}/>
        <Route path="/resetpassword/:id" element={<ChangePassword/>}/>
        <Route path="/profile" element={<EditProfile/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/createcategory" element={<CreateCategory/>}/>
        <Route path="/categorysingleView/:name/:id" element={<CatSingleView/>}/>
        <Route path="/dashboard/product" element={<Product/>}/>
        <Route path="/singlepage" element={<SinglePage/>}/>
        <Route path="/post" element={<Post />} />
        <Route path="/post/cars/:catId/:subId" element={<CarsDetails />} />
        <Route path="/post/motorcycle/:catId/:subId" element={<MotorCycleDetails />} />
        <Route path="/post/sparepart/:catId/:subId" element={<SparePartsDetails />} />
        <Route path="/post/bicycle/:catId/:subId" element={<BicyclesDetails />} />
        <Route path="/post/mobilephone/:catId/:subId" element={<MobilePhoneDetails />} />
        <Route path="/post/accessories/:catId/:subId" element={<AccessoriesDetails />} />
        <Route path="/post/tablet/:catId/:subId" element={<TabletsDetails/>}/>
        <Route path="/post/electronic&appliances/:catId/:subId" element={<TVsVideoAudio/>}/>
        <Route path="/post/commercial-spare/:catId/:subId" element={<CommercialVehicles/>}/>
        <Route path="/post/spare/:catId/:subId" element={<SpareParts/>}/>
        <Route path="/post/furniture/:catId/:subId" element={<SofaDetails/>}/>
        <Route path="/post/fashion/:catId/:subId" element={<FashionDetails/>}/>
        <Route path="/post/pets/:catId/:subId" element={<PetsDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
