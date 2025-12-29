import { useState,lazy,Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
const Signup     = lazy(()=>import("./pages/Signup"))
const Signin     = lazy(()=>import("./pages/Signin"))
const Adminuser  = lazy(()=>import("./pages/Adminuser"))
const Normaluser = lazy(()=>import("./pages/Normaluser"))
const Createmovie=lazy(()=>import("./pages/Createmovie"))
const Editmovie =lazy(()=>import("./pages/Editmovie"))
import Home from "./pages/Home"
import{BrowserRouter,Routes,Route} from "react-router"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/signin"   element={<Suspense  fallback={"loading........."}><Signin/></Suspense>} ></Route>
            <Route path="/signup" element={<Suspense fallback={"loading..........."}><Signup/> </Suspense> }></Route>
            <Route path="/Adminuser" element ={<Suspense fallback={"loading Admin page........."}><Adminuser/></Suspense>}></Route>
            <Route path="/Normaluser" element={<Suspense fallback={"loading imdb users page........."}><Normaluser/></Suspense>}></Route>
            <Route path="/Createmovie" element={<Suspense fallback={"loading created movie..........."}><Createmovie/></Suspense>}></Route>
            <Route path="/Editmovie" element={<Suspense fallback={"loading Editing page........"}><Editmovie/></Suspense>}></Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
