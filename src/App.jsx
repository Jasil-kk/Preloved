import { Routes, Route } from 'react-router-dom'
import './App.css'
import PostForm from './Components/PostForm'
import Pages from './Pages/Pages'
import Post from './Pages/Post'


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Pages/>}/>
        <Route path='/post' element={<Post/>}/>
        <Route path='/post/postform' element={<PostForm/>}/>
      </Routes>   
    </div>
  )
}

export default App
