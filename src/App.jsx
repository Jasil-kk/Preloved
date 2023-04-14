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
import Product from "./Pages/SinglePages/AdminPage/Product/Product";
import ProductView from "./Pages/SinglePages/AdminPage/Product/ProductView";
import SinglePage from "./Pages/SinglePages/SinglePage";
import DashLayout from "./Pages/SinglePages/AdminPage/DashLayout";
import Dashboard from "./Pages/SinglePages/AdminPage/Dashboard";
import Users from "./Pages/SinglePages/AdminPage/Users/Users";
import Categories from "./Pages/SinglePages/AdminPage/Category/Categories";
import NotFound from "./Pages/NotFound";
import ErrorToast, { InfoToast, SuccessToast, WarningToast } from "./Components/styles-store/Toasts";


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Pages />} />
        <Route path="*" element={<NotFound/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/forgetpassword" element={<ForgetPassword/>}/>
        <Route path="/resetpassword/:id" element={<ChangePassword/>}/>
        <Route path="/profile" element={<EditProfile/>}/>
        <Route path="/createcategory" element={<CreateCategory/>}/>
        <Route path="/singlepage/:id" element={<SinglePage/>}/>
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
        <Route path="/error" element={<ErrorToast/>}/>
        <Route path="/warning" element={<WarningToast/>}/>
        <Route path="/info" element={<InfoToast/>}/>
        <Route path="/success" element={<SuccessToast/>}/>

        {/* admin */}
        <Route element={<DashLayout/>}>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/dashboard/users" element={<Users/>}/>
        <Route path="/dashboard/categories" element={<Categories/>}/>
        <Route path="/dashboard/categories/:name/:id" element={<CatSingleView/>}/>
        <Route path="/dashboard/products" element={<Product/>}/>
        <Route path="/dashboard/product/:id" element={<ProductView/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
