import { Routes, Route } from 'react-router-dom'
import './App.css'
import BicyclesDetails from './Pages/DetailsForm/Bikes/BicyclesDetails'
import MotorCycleDetails from './Pages/DetailsForm/Bikes/MotorCycleDetails'
import ScootersDetails from './Pages/DetailsForm/Bikes/ScootersDetails'
import SparePartsDetails from './Pages/DetailsForm/Bikes/SparePartsDetails'
import CarsDetails from './Pages/DetailsForm/Cars/CarsDetails'
import Pages from './Pages/Pages'
import Post from './Pages/Post'
import PostForm from './Pages/PostForm'


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Pages/>}/>
        <Route path='/post' element={<Post/>}/>
        <Route path='/post/cars' element={<CarsDetails/>}/>
        <Route path='/post/motorcycle' element={<MotorCycleDetails/>}/>
        <Route path='/post/scooter' element={<ScootersDetails/>}/>
        <Route path='/post/sparepart' element={<SparePartsDetails/>}/>
        <Route path='/post/bicycle' element={<BicyclesDetails/>}/>
      </Routes>   
    </div>
  )
}

export default App
