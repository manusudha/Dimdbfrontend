import {useState,useEffect} from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"
import toast,{Toaster} from "react-hot-toast";
export default function Createmovie(){
const [originalTitle,SetoriginalTitle]=useState('');
const [releaseDate,SetreleaseDate]=useState('');
const [runtimeMinutes,SetruntimeMinutes]=useState(0);
const [averageRating,SetaverageRating]=useState(0);
const [description,Setdescription]=useState('');
const [imagelink,Setimagelink]=useState('');
const [created,setCreated]=useState(true);
const Navigate =useNavigate();
        const Validate=async()=>{
            try{
            const res= await axios.get("http://localhost:8000/me",{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
            if(!res.data.user.isAdmin){
                // to just make sure the person who is adding should have admin access
                toast("Admin Access required",{icon:'⚠️'})
                Navigate("/signin",{replace:true})     
            }

            toast('good to add movie',{icon:'😅'})
            

            }catch(error){
            toast('please login as admin',{icon:'🕵🏻‍♀️'})
            Navigate('/signin',{replace:true})
            }
        
        }


         useEffect(()=>{Validate()},[])


        const CreateMovieonclick= async()=>{
        
         
         try{
        
            setCreated(false)
             
           const iscreated =await axios.post("http://localhost:8000/createMovie",
                            {
                                originalTitle, 
                                description,
                                releaseDate,
                                runtimeMinutes,
                                averageRating,
                                imagelink
                            },
                                {
                                            headers:{
                                        
                                            Authorization:`Bearer ${localStorage.getItem('token')}`
                                        }
                                }
                            )
                        console.log("this is is created log "+iscreated)
                    if( iscreated){
                            setCreated(true);
                            
                            Navigate("/Adminuser",{replace:true})
                            toast.success("movie created successfully")
                        
                            
                    }else{
                         toast.error("movie not created please try again")
                            setCreated(true);
                    }
                   
                  
         }
         catch(error){
                   toast.error("network/api error")
                   setCreated(true)
          }
    }
    return <div>
                <Toaster  possition="top-center" reverseOrder={false}/>
                 <nav className="m-0 bg-gray-200 cursor-pointer">
                    <svg  onClick={()=>Navigate("/Adminuser",{replace:true})}  xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 16 16"><path fill="#000000" fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m10.25.75a.75.75 0 0 0 0-1.5H6.56l1.22-1.22a.75.75 0 0 0-1.06-1.06l-2.5 2.5a.75.75 0 0 0 0 1.06l2.5 2.5a.75.75 0 1 0 1.06-1.06L6.56 8.75z" clip-rule="evenodd"/></svg>
                 </nav>
                <div className="flex flex-col items-center justify-center bg-gray-200 h-screen">                           
                            <div className="flex h-[400px] w-[350px] flex-col justify-between items-center mx-auto bg-white rounded-md">
                                <input  className="text-center h-8 w-64 border-blue-200 border-2 rounded-md outline-none mt-12"  type="text" placeholder="Movie Title"                  onChange={(e)=>SetoriginalTitle(e.target.value)}           />
                                <input  className="text-center h-8 w-64 border-blue-200 border-2 rounded-md outline-none" type="text" placeholder="Description"                         onChange={(e)=>Setdescription(e.target.value)}           />
                                <input  className="text-center h-8 w-64 border-blue-200 border-2 rounded-md outline-none" type="text"  placeholder="Release Date"                       onChange={(e)=>SetreleaseDate(e.target.value)}           />
                                <input  className="text-center h-8 w-64 border-blue-200 border-2 rounded-md outline-none"  type="number"  placeholder="Duration of Movie"                 onChange={(e)=>SetruntimeMinutes(e.target.value)}           />
                                <input  className="text-center h-8 w-64 border-blue-200 border-2 rounded-md outline-none" type="number"  placeholder="Rating"                             onChange={(e)=>SetaverageRating(e.target.value)}           />
                                <input  className="text-center h-8 w-64 border-blue-200 border-2 rounded-md outline-none mb-12"type="text" placeholder="image link"                     onChange={(e)=>Setimagelink(e.target.value)}           />
                                
                            </div>
                            {created?<button className="bg-gray-100 border-2 border-blue-200 rounded-md h-12 w-32 cursor-pointer mt-2" onClick={()=>CreateMovieonclick()}>Create</button>:<button className="bg-gray-100 border-2 border-blue-200 rounded-md h-12 w-32 cursor-pointer mt-2">creating movie...</button> }
                                
                    </div>
          </div>
}