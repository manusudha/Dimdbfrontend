import {useNavigate,useSearchParams} from 'react-router-dom'
import {useState} from 'react';
import toast,{Toaster} from 'react-hot-toast'
import axios from 'axios'

export default function Editmovie(){
const [originalTitle,setNewOrginalTitle]=useState('');
const [description,setNewDescription]=useState('');
const[releaseDate,setReleaseDate]=useState('');
const[runtimeMinutes,setNewRunTimeMinutes]=useState(0);
const[averageRating,setNewAverageRating]=useState(0);
const[primaryImage,setNewImageLink]=useState('');
//state for isloading kind of thing
const[isUpdated,setIsUpdated]=useState(true);
// using useSearchParams for getting an movie from url
const [searchParams]= useSearchParams();
const Navigate =useNavigate();
const id = searchParams.get("id");

const UpdateMovie=async()=>{
    try{
        console.log("this is id : "+id)
        setIsUpdated(false)
        const res= await axios.put(`http://localhost:8000/Movies?id=${id}`,
             {
                  originalTitle,
                  description,
                  releaseDate,
                  runtimeMinutes,
                  averageRating,
                  primaryImage

            },
            {headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }}
           )
            if(res){
             toast.success("movie updated successfully")  
             setIsUpdated(true)
             Navigate('/Adminuser',{replace:true})
            }
    }
    
    catch(error){
      toast.error('error while updating',{icon:"😌"})
      setIsUpdated(true)
    }
}
    return  <div>
                  <Toaster  possition="top-center" reverseOrder={false}/>
                  <nav className="m-0 bg-gray-200 cursor-pointer">
                    <svg  onClick={()=>Navigate("/Adminuser",{replace:true})}  xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 16 16"><path fill="#000000" fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m10.25.75a.75.75 0 0 0 0-1.5H6.56l1.22-1.22a.75.75 0 0 0-1.06-1.06l-2.5 2.5a.75.75 0 0 0 0 1.06l2.5 2.5a.75.75 0 1 0 1.06-1.06L6.56 8.75z" clip-rule="evenodd"/></svg>
                 </nav>
                    <div className="flex flex-col items-center justify-center bg-gray-200 h-screen">                         
                            <div className="flex h-[400px] w-[350px] flex-col justify-between items-center mx-auto bg-white rounded-md">
                                <input  className="text-center h-8 w-64 border-blue-200 border-2 rounded-md outline-none mt-12"  type="text" placeholder="new Movie Title"                  onChange={(e)=>setNewOrginalTitle(e.target.value)}           />
                                <input  className="text-center h-8 w-64 border-blue-200 border-2 rounded-md outline-none" type="text" placeholder="new Description"                         onChange={(e)=>setNewDescription(e.target.value)}           />
                                <input  className="text-center h-8 w-64 border-blue-200 border-2 rounded-md outline-none" type="text"  placeholder="new Release Date"                       onChange={(e)=>setReleaseDate(e.target.value)}           />
                                <input  className="text-center h-8 w-64 border-blue-200 border-2 rounded-md outline-none"  type="number"  placeholder="Duration of Movie"                 onChange={(e)=>setNewRunTimeMinutes(e.target.value)}           />
                                <input  className="text-center h-8 w-64 border-blue-200 border-2 rounded-md outline-none" type="number"  placeholder=" new Rating out of 5"                             onChange={(e)=>setNewAverageRating(e.target.value)}           />
                                <input  className="text-center h-8 w-64 border-blue-200 border-2 rounded-md outline-none mb-12"type="text" placeholder=" new image link"                     onChange={(e)=>setNewImageLink(e.target.value)}           />                               
                            </div>
                            {isUpdated?<button className="bg-gray-100 border-2 border-blue-200 rounded-md h-12 w-32 cursor-pointer mt-2" onClick={()=>UpdateMovie()}>Update</button>:<button className="bg-gray-100 border-2 border-blue-200 rounded-md h-12 w-32 cursor-pointer mt-2">creating movie...</button> }
                      
                   </div>
          </div>
}

/*
 "originalTitle":"radha radha", 
                "description":"radha radha radha",
                "primaryImage":"radha radha radha", 
                "releaseDate": "21-02-14",
                "runtimeMinutes":123,
                "averageRating":4

                what is wrong with this line i m getting [object, object]
                app.put("/Movies",auth,async(req,res)=>{
                const id=req.query.id;
                console.log("this is id from movie to edit : " + req.body);
*/