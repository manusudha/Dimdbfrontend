import {useState,useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import toast,{Toaster} from "react-hot-toast"
import axios from "axios"
export default function Signin(){
     const [showpassword, setShowpassword]=useState(false);
     const [email, Setemail] =useState('')
     const [password,Setpassword]=useState('');
     const[isemailcorrect,Setisemailcorrect]=useState(true)
     const[ispasswordcorrect,Setispasswordcorrect]=useState(true)
     const[issigningin,Setissigningin]=useState(true);
     const Navigate = useNavigate()
     const Validate=async()=>{
         try{
           const res = await axios.get("https://dummyimdbbackend.onrender.com/me",{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
           if(res){
                    
                    if(res.data.user.isAdmin){Navigate('/Adminuser',{replace:true})}
                    else{Navigate("/Normaluser",{replace:true})}
                    
           }else{
                    toast("please check details")
           }
        

         }catch(error){
           toast('please login',{icon:'🕵🏻‍♀️'})
         }
      
     }


     useEffect(()=>{Validate()},[])





    return <div className="flex flex-col  items-center justify-center bg-gray-100 h-screen">
                 <Toaster possition="top-center"  reverseOrder={false}/>
                 <div className="mx-auto h-[300px] justify-between flex flex-col items-center bg-white pt-12 w-76">
                    <div>
                         <input type="text"  onChange={(e)=>Setemail(e.target.value)}  className="w-64 h-8 border-2 rounded-md text-center outline-none" placeholder="Email" />
                         <div>{isemailcorrect?"":"please check the entered email"}</div>
                    </div>
                    <div>
                         <div className="justify-center items-center flex border-2 border-black rounded-md "> 
                              <input type={showpassword?"text":"password"} value={password} className="w-64 h-8  outline-none text-center" placeholder="Password" onChange={(e)=>{Setpassword(e.target.value)}}/>
                              <button className="cursor-pointer" onClick={()=>{setShowpassword(!showpassword)}} >{showpassword?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye h-5 w-5"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-off h-5 w-5"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path><line x1="2" x2="22" y1="2" y2="22"></line></svg>}</button>
                         </div>
                         <div>{ispasswordcorrect?"":"password should be >8 "}</div>
                    </div>
                    
                      {issigningin?<button className="h-12 w-24 cursor-pointer bg-black text-white rounded-full "
                         
                            onClick={async()=>{
                              try{ 
                                            
                                        if(!email.includes("@gmail.com")){
                                           Setisemailcorrect(false);
                                        }
                                        else if(password.length<=8){
                                             Setisemailcorrect(true)
                                             Setispasswordcorrect(false)
                                        }
                                     else{
                                        Setissigningin(false) 
                                        const res = await axios.post("https://dummyimdbbackend.onrender.com/signin",{
                                                       email,
                                                       password
                                                       })

                                               if(res){
                                                     toast.success("signed in successfully")
                                                     localStorage.setItem("token",res.data.token)  
                                                     console.log(res.data.admin) 
                                                     if(res.data.admin){
                                                        Navigate("/Adminuser",{replace:true})
                                                     }
                                                     else{
                                                       Navigate("/Normaluser",{replace:true})
                                                     }
                                                     

                                               }
                                               else{
                                                  Setissigningin(true)
                                                  toast.error("user does not exist")
                                               }
                                                 
                                             }
                                        
                                        
                                 }
                            catch(error){
                                  Setissigningin(true)
                                  toast.error("error occured please check");
                            }
                         }}                 
                     
                     
                     
                      >Signin</button>: <button className="bg-gray-300 h-12 w-24 border border-black rounded-full text-balck font-medium w-32 cursor-pointer">signing up ....</button> }
                    <div className="pb-12"> Don't have an accout ? <u className="cursor-pointer" onClick={()=>Navigate("/signup",{replace:true})}>Signup</u></div>
                 </div> 
          </div>
}