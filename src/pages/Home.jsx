import imdblogo from "../components/Images/imdblogo.png"
import imdbprologo from "../components/Images/imdbprologo.png"
import {useNavigate} from "react-router-dom"
import {useState} from "react"
export default function Home(){
   const Navigate=useNavigate();
   const [isactive,setActive]=useState(false);
    return<div className="h-screen">
             <nav className=" hidden md:flex justify-between flex flex-row items-center pt-2 bg-black text-white h-[55px]">
                <span ><img src={imdblogo} alt="" /></span>
                <span><input type="text" name="search movie" id=""  className="bg-white outline-none text-black"/></span>
                <span><img src={imdbprologo} alt="" /></span>
                <span className="text-gray-800 h-[40px] bg-gray-800">|</span>
                <span ><svg className="h-[30px] cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 1024 1024"><path fill="#ffffff" d="M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-260 72h96v209.9L621.5 312L572 347.4V136zm220 752H232V136h280v296.9c0 3.3 1 6.6 3 9.3a15.9 15.9 0 0 0 22.3 3.7l83.8-59.9l81.4 59.4c2.7 2 6 3.1 9.4 3.1c8.8 0 16-7.2 16-16V136h64v752z"/></svg></span>
                <span className="font-medium cursor-pointer">Watchlist</span>
                <span className="font-medium cursor-pointer" onClick={()=>Navigate("/signin",{replace:true})}>Singnin</span>
                <span className="font-medium cursor-pointer pr-4"  onClick={()=>Navigate("/signup",{replace:true})}>Signup</span>
             </nav>
             <nav className="md:hidden flex justify-between bg-black">
                 <svg className="relative cursor-pointer z-50  relative w-12 h-12" onClick={()=>{setActive(!isactive)}} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 16 16"><path fill="#ffffff" fill-rule="evenodd" d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75M2 8a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 2 8m0 4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/></svg>
                  <span className={` duration-700  ease-in-out transform transition-transform absolute left-0 min-h-[10vh] left-0 top-[6%] w-full z-40 bg-white  border-1 border-blue-100 flex justify-between flex-col font-semibold text-xl  ${isactive?"opacity-100 translate-y-0":"opacity-0 -translate-y-10 pointer-events-none"}`}>
                     <div  onClick={()=>Navigate("/signin",{replace:true})} className="relative">Signin</div>
                     <div  onClick={()=>Navigate("/signup",{replace:true})} className="relative">signup</div> 
                 </span>
                 <span  ><img src={imdblogo} alt="" /></span>
                

             </nav>
             <div className="absolute bg-black h-screen w-full  items-center justify-center">
                 <span className="relative jutify-between items-center flex flex-row">
                    <span><img src="https://m.media-amazon.com/images/M/MV5BYzQ5OWJhZjctYTM2Ni00NmJlLThlOGQtYmIyNTk1NjA3ZmZhXkEyXkFqcGdeQWFkcmllY2xh._V1_QL75_UX760_CR0,0,760,428_.jpg"alt="" /></span>
                    <span><img src="https://m.media-amazon.com/images/M/MV5BNWJmMWEwZjAtOTk0NS00MWVhLWIyZDktN2JjZWQ0ZmU1ODc5XkEyXkFqcGdeQWFybm8@._V1_QL75_UX760_CR0,0,760,428_.jpg" alt="" /></span>
                    <span><img src="https://m.media-amazon.com/images/M/MV5BZDI0OTI0ZjMtOWJiMS00ODg2LWIwYTgtZDliMjUzN2NlOGQxXkEyXkFqcGdeQXZ3ZXNsZXk@._V1_QL75_UY428_CR0,0,760,428_.jpg" alt="" /></span>
                    <span><img src="https://m.media-amazon.com/images/M/MV5BNDM0MThkYzktM2U5OS00YWIxLWEyZWEtNDYzMjZlMzcxNzg5XkEyXkFqcGc@._V1_QL75_UY414_CR26,0,280,414_.jpg" alt="" /></span>
                    <span><img src="https://m.media-amazon.com/images/M/MV5BYjg1Mjc3MjQtMTZjNy00YWVlLWFhMWEtMWI3ZTgxYjJmNmRlXkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg" alt="" /></span>
                    <span><img src="https://m.media-amazon.com/images/M/MV5BZDYxY2I1OGMtN2Y4MS00ZmU1LTgyNDAtODA0MzAyYjI0N2Y2XkEyXkFqcGc@._V1_QL75_UX280_CR0,0,280,414_.jpg" alt="" /></span>
                    <span><img src="https://m.media-amazon.com/images/M/MV5BMzFiNTVkZjYtM2I3Yi00MGNjLWEyYTAtMGViNGExZmMzMGMzXkEyXkFqcGc@._V1_QL75_UY414_CR26,0,280,414_.jpg" alt="" /></span>
                    <span><img src="https://m.media-amazon.com/images/M/MV5BM2VhOWNiMGItYjIwZi00MzNiLTk1MDEtNGMyYjFmYmU3ZTVlXkEyXkFqcGc@._V1_QL75_UX280_CR0,14,280,414_.jpg" alt="" /></span>
                    <span> <img src="https://m.media-amazon.com/images/M/MV5BZmYzN2VhNTAtYWUxZi00OTNiLWIyZDgtMGMxZTNlYzM3ZmE1XkEyXkFqcGc@._V1_QL75_UY414_CR26,0,280,414_.jpg" alt="" /> </span>
                 </span>
                 <span className="relative jutify-between items-center flex flex-row">
                    <span><img src="https://m.media-amazon.com/images/M/MV5BNjRhYzhkMjctNGM3Mi00OGIxLWIwYmItZGU1OTIxMWJkMGI2XkEyXkFqcGc@._V1_QL75_UX760_CR0,0,760,428_.jpg" alt="" /></span>
                    <span><img src="https://m.media-amazon.com/images/M/MV5BYzI4YTliOWUtMzYwMC00NzNmLThiYzQtOGIyZjY5OGE0YTNiXkEyXkFqcGc@._V1_QL75_UX760_CR0,0,760,428_.jpg" alt="" /></span>
                    <span><img src="https://m.media-amazon.com/images/M/MV5BY2RhNjI2MjQtNzAzNy00MDk2LWFmMDAtYmE4OTBlNzE0MzFiXkEyXkFqcGc@._V1_QL75_UX760_CR0,0,760,428_.jpg" alt="" /></span>
                    <span><img src="https://m.media-amazon.com/images/M/MV5BZDZiMmQ3MzEtOTQxOC00NDg3LWFlZmEtNTgxNTNkYjdhN2ViXkEyXkFqcGc@._V1_QL75_UX760_CR0,0,760,428_.jpg" alt="" /></span>
                    <span><img src="https://m.media-amazon.com/images/M/MV5BOGFiNWFlYTUtMTZhZS00Y2MxLWIxNjYtNzE1OThkNTI5MmU4XkEyXkFqcGdeQWpnYW1i._V1_QL40_QL75_UX1000_CR0,0,1000,563_.jpg" alt="" /></span>
                    <span><img src="https://m.media-amazon.com/images/M/MV5BZGMyZTUzNjUtOWE1YS00NzUyLTlkYjMtZTAxZTdmODVlZjZmXkEyXkFqcGc@._CR18,8,2948,1658_QL75_UY563_CR0,0,1000,563_.jpg" alt="" /></span>
                    <span><img src="https://m.media-amazon.com/images/M/MV5BYzExZmYzMWItOWIyMy00ZTZiLWEwM2EtMTU5NjQzYjExMDYyXkEyXkFqcGdeQWFybm8@._V1_QL75_UX760_CR0,0,760,428_.jpg" alt="" /></span>
                    <span><img src="https://m.media-amazon.com/images/M/MV5BNDllZjAzODktMTlmZS00ZDA2LTlmOTAtODgzZjQ0NTZlMjBlXkEyXkFqcGc@._V1_QL75_UY414_CR26,0,280,414_.jpg" alt="" /></span>
                 </span>
                 <div className="flex justify-center ">
                    <div className="absolute mt-42 text-[14px]   w-82 h-[30px] text-center content-center font-medium flex justify-center items-center text-black z-10 rounded-full bg-yellow-500 cursor-pointer" onClick={()=>Navigate("/signin",{replace:true})}>SignUp / Signin for more access </div>
                 </div>
                 <span className="blur-[20px]  justify-between items-center relative opacity-25  flex  flex-row  w-full bg-linear-to-t from-white-900 to-blue-400 z-0 ">
                      <span><img src="https://m.media-amazon.com/images/M/MV5BZDRmMjU1OTQtMjliZC00MTM1LWI0NzgtMjFmYWI3ZDc3ZWZiXkEyXkFqcGc@._V1_QL75_UX760_CR0,0,760,428_.jpg" alt="" /></span> 
                      <span><img src="https://m.media-amazon.com/images/M/MV5BYjAwZWQ2NDMtMWYzOC00ODMxLWJiN2MtMTVlMmE0MzY0NWI4XkEyXkFqcGc@._V1_QL75_UX760_CR0,0,760,428_.jpg" alt="" /></span>
                      <span><img src="https://m.media-amazon.com/images/M/MV5BMTkxNGFlNDktZmJkNC00MDdhLTg0MTEtZjZiYWI3MGE5NWIwXkEyXkFqcGc@._V1_QL75_UX180_CR0,7,180,266_.jpg" alt="" /></span>
                 </span>
                 
                 
                  
             </div>
           
         </div>
}