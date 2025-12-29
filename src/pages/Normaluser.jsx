import {useState,useEffect} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import imdblogo from "../components/Images/imdblogo.png"
import Pagi from "../components/Pagi";
import Createmovie from "./Createmovie"
import toast,{Toaster} from "react-hot-toast"
export default function Normaluser(){
  const [profileicon,setProfileicon]=useState('');
  const [page,Setpage]=useState(1);
  const [limit,Setlimit]=useState(50);
  const [fetchedmovies,Setfetchedmovies]=useState([]);
// pagination part
  const [noOfPage,setNoOfPage]=useState()
// state for delete handleling
const[isdeleting,setDeleting]=useState(true);
// state for userprofile
const [profileiconNu,setProfileiconNu]=useState('');
// state for searching movie by title and description
const [titlesearch,setTitlesearch]=useState('')
const [descriptionsearch,setDescriptionsearch]=useState('')
// state for is searching state if it was mentioned as is searching then 
const [isSearching,setIsSearching]= useState(false);
// state for updating  movie
const [isUpdating,setIsUpdating]=useState(false);
// state for sorting a movie
const [sortBy, setSortBy]=useState('name');
const [order,setOrder]=useState('asc');
const [isSorting,setIsSorting]=useState(false);

const Navigate =useNavigate();
  const fetchMovies=async()=>{
      
      {console.log(page,limit)}
      const allMovies = await axios.get(`http://localhost:8000/Movies?page=${page}&limit=${limit}`);
      Setfetchedmovies(allMovies.data.data);
      setNoOfPage(allMovies.data.calcpages)
      
  }


   const Validate=async()=>{
            try{
            const res= await axios.get("http://localhost:8000/me",{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
            setProfileiconNu(res.data.user.name)
            if(res){
                toast('welcome to dashboard',{icon:'🙏'})
                if(!res.data.user.isAdmin){
                    Navigate("/Normaluser",{replace:true})
                }
                
            }

            }catch(error){
            toast('some error please check ',{icon:'🕵🏻‍♀️'})
            Navigate('/signin',{replace:true})
            }
        
        }
        useEffect(()=>{ Validate()},[])
        useEffect(()=>{
            if(isSorting){
                Sortmovie();
            }
            else if(isSearching){
            SearchedMovie();
            }else{
            fetchMovies();
            }
},[page,isSearching,isSorting,titlesearch,descriptionsearch,sortBy,order])

 // function call for searching the api using title description

  
 const SearchedMovie=async()=>{
       try{
               const res=await axios.get(`http://localhost:8000/Movies/search?originalTitle=${titlesearch}&description=${descriptionsearch}&limit=${limit}&page=${page}`,{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem('token')}`
                }
               })
               if(res){
                Setfetchedmovies(res.data.searchedMovies)
                setNoOfPage(res.data.calcpage)
                
               }

       }catch(error){
                toast("not able to seached the movie")
       }
 }
 //function for sorting movie 
 const Sortmovie=async()=>{
     try{
           const res=await axios("http://localhost:8000/Movies/sorted",{
            params:{
                 sortBy,
                 order,
                 page,
                 limit
            }
           })
           Setfetchedmovies(res.data.movies)
           setNoOfPage(res.data.calcpage)

           
     }catch(error){
           
     }
 }
  
 
  
return <div>
            <Toaster possition="top-center"  reverseOrder={false}/>
             <nav className="justify-between flex items-center bg-black text-white">
                 <span className="cursor-pointer"> <img src={imdblogo} alt="imdb logo " /></span>
                 <span ><input className="bg-white w-[400px] text-black outline-blue-200 rounded-md" placeholder="🔎 Search Movie by Title" value={titlesearch} type="text"  onChange={(e)=>{setTitlesearch(e.target.value);setIsSearching(true);Setpage(1)}}/></span>
                 <button onClick={()=>{setDescriptionsearch("");setTitlesearch("");setIsSearching(false);Setpage(1)}}  className="rounded-md outline-blue-300 h-8 w-24 text-black border-2 cursor-pointer hover:bg-blue-50 bg-pink-100">clear search</button>
                 <span ><input className="bg-white w-[400px] text-black outline-blue-200 rounded-md" placeholder="🔎  Search Movie by Description" value={descriptionsearch} type="text"  onChange={(e)=>{setDescriptionsearch(e.target.value);setIsSearching(true);Setpage(1)}}/></span>
                 <span className="flex justify-center items-center">
                     <span className="h-12 w-12 rounded-full items-center justify-center flex bg-white text-black font-medium text-xl mr-12 cursor-pointer"><div>{profileiconNu.toUpperCase()[0]}</div></span>
                     <span className="cursor-pointer" onClick={()=>{localStorage.removeItem('token'); Navigate("/signin",{replace:true})}} ><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"/></svg></span>
                 </span>         
             </nav>
              <span className="flex justify-center items-center mt-4 ">
                    <Pagi noOfPage={noOfPage} page={page} Setpage={Setpage}/>
              </span>
             <span className="flex flex-row justify-between items-center mx-auto w-[1150px] mt-2">
                 
                     <span className="flex justify-between items-center w-[110px] mt-4">
                          <span>Filter By :</span>
                          <span><svg className="h-8 w-8  " viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#444" d="M1 2h14v2l-6 5v7l-2-2v-5l-6-5v-2z"></path> <path fill="#444" d="M1 0h14v1h-14v-1z"></path> </g></svg></span>
                     </span>    
                     <span className=" flex justify-between items-center mt-2 w-[1000px]">
                        <select className=" flex justify-between items-center mt-2" onChange={(e)=>{setSortBy(e.target.value);setIsSorting(true);Setpage(1)}}>
                                <option value="name">Name</option>
                                <option value="rating">Rating</option>
                                <option value="releaseDate">ReleaseDate</option>
                                <option value="duration">Duration</option>
                        </select>
                        <select className= "flex justify-between items-center mt-2" onChange={(e)=>{setOrder(e.target.value);setIsSorting(true);Setpage(1)}}>
                                 <option value="asc">Ascending</option>
                                 <option value="desc">Descendig</option>
                        </select>
                        <button onClick={()=>{setIsSorting(false),setSortBy('name'),setOrder('asc'),Setpage(1)}} className="bg-gray-100 border-2  border-blue-200 rounded-md  w-28 h-8 cursor-pointer ">clear sort</button>
                    </span>
             </span>
             <div className="grid grid-cols-5 gap-2 mt-8">
                
                  {
                  fetchedmovies.map((m,i)=>{ return <div key={i} >
                                                      <div className="mt-2 border-2 border-blue-100 rounded-md" >
                                                          <div className="flex flex-col justify-center items-center">
                                                             <div>title   :  {m.originalTitle}</div>
                                                             <div> Rating : {m.averageRating}</div>
                                                          </div>
                                                          <div className="flex flex-col justify-center items-center">
                                                              <img className="h-[200px] w-[150px]"src={m.primaryImage} alt="" />
                                                          </div>   
                                                          <div className="flex flex-col justify-center items-center">
                                                              <div>Release Date :{m.releaseDate}</div>
                                                              <div>time(in min) :{m.runtimeMinutes}</div>
                                                          </div>                                                      
                                                      </div>
                                                  </div>
                                         })
                   }
                            
             </div>
             
      </div>
}