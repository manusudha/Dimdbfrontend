import {useState} from "react"
import{useNavigate} from "react-router-dom"

import toast,{Toaster} from 'react-hot-toast'
import axios from "axios"
export default function Signup(){
  const [showpassword, setShowpassword]=useState(false);
  const [password, setPassword] =useState('');
  const [username,Setusername] =useState('')
  const [email ,Setemail]=useState('');
  const [admin,Setadmin] =useState(false)
  const [correctname,Setcorrectname]=useState(true)
  const [correctemail, Setcorrectemail] =useState(true);
  const [correctpassword,Setcorrectpassword]=useState(true);
  const [issigningup,Setsigningup]=useState(true);

  const Navigate =useNavigate();
    return<div className="  bg-gray-100 h-screen flex flex-col items-center justify-center">
                 <Toaster position="top-center" reverseOrder={false}/>
                 <div className=" w-96 mx-auto h-[500px] justify-between flex flex-col items-center flex  border-blue-500  rounded-md  bg-white">
                    <div>
                      <input className="w-64 border-2 h-8 rounded-md outline-none bg-white mt-4 text-center" type="text" placeholder="Name" onChange={(e)=>Setusername(e.target.value)}/> 
                      <div>{correctname?"":<div>please enter valid username</div>}</div>
                    </div>
                    <div>
                      <input className="w-64 border-2 h-8 rounded-md outline-none bg-white text-center " type="text" placeholder="Email" onChange={(e)=>Setemail(e.target.value)}/>
                      <div>{correctemail?"":"please enter the write email"}</div>
                    </div>
                    <div>
                           <div className="flex justify-center items-center border-2 rounded-md">
                              <input className="w-64  h-8 rounded-md outline-none bg-white text-center" type={showpassword?'text':"password"} value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                              <button className="cursor-pointer" onClick={()=>{setShowpassword(!showpassword)}} >{showpassword?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye h-5 w-5"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-off h-5 w-5"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path><line x1="2" x2="22" y1="2" y2="22"></line></svg>}</button>
                           </div>
                           <div>{correctpassword?"":"passord should be >8 char"}</div>
                    </div>
                    
                    
                    <div className="justify-center items-center flex "><input type="checkbox" className="h-[22px] w-[22px]" onChange={()=>Setadmin(true)}/>  signup as admin</div>
                   
                    <div> 
                      {
                          issigningup?
                         <button className="bg-black h-12 w-24 rounded-full text-white cursor-pointer" 
                            onClick={async()=>{
                                  try{
                                        if(username.length<=1){
                                              Setcorrectname(false)
                                        }
                                         else if(!email.includes("@gmail.com")){
                                            Setcorrectname(true)
                                            Setcorrectemail(false)
                                         }
                                         else if(password.length<=8){
                                           Setcorrectemail(true)
                                            Setcorrectpassword(false)
                                         }else{
                                         Setsigningup(false)
                                         const res = await axios.post("https://dummyimdbbackend.onrender.com/createUser",{
                                                  username,
                                                  email,
                                                  password,
                                                  admin
                                                })
                                                if(res){
                                                  toast.success("signed up successfully")
                                                  setTimeout(()=>{Navigate("/signin",{replace:true})},1000)
                                              }
                                              else{
                                                  Setsigningup(true)
                                                  toast.error("please try again")
                                              }
                                        }
                                        
                                         
                                     }
                                      catch(error){
                                                Setsigningup(true)
                                              toast.error("please try again later")   

                                      } 

                                               
                                


                           }}
              
                         >Signup</button>:<button className="bg-gray-300 h-12 w-24 border border-black rounded-full text-balck font-medium w-32 cursor-pointer">signing up ....</button>

                          }
                         </div>
                   
                   
                   
                   
                   
                   
                   
                   
                    <div>Already have an account ? <u className="cursor-pointer" onClick={()=>Navigate("/Signin",{replace:true})}>Signin</u></div>
                 </div>
          </div>
}