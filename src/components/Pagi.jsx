 import {useState} from "react"
 export default function Pagi({noOfPage,Setpage}){
   console.log(noOfPage)  
    let i=1; 
    let pagiarr=[]
    while(i<=noOfPage){
        pagiarr.push(i);
        i++;
    }
   console.log(pagiarr)
    return <span>
                 {
                    pagiarr.map((num,index)=>{return <span key={index}  className='items-center m-1'>
                                                           <button className="border border-blue-100 rounded-md outline-blue-400 bg-gray-100 h-8 w-8 cursor-pointer " onClick={()=>{Setpage(num)}}>{num}</button>
                                                   </span>
                    })
                 }
           </span>   
}