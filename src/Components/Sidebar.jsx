import React from 'react'
import cross from "../images/cross.png"
import user from "../images/user (1).png"
import update from "../images/New massage dot.png"
import store from "../images/Store.png"
import help from "../images/Help sign.png"
import logout from "../images/Logout.png"
import { Store } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
export default function Sidebar({handleslideclose,handleaccount,setaccount}) {
let nevigate=useNavigate()
let handleclick=()=>{
nevigate("/home/myAccount")
handleaccount()
setaccount(true)
}
let handlelogout=()=>{
  nevigate("/")
  }
  return (
<>
<div className="w-[80%] flex   items-center flex-col h-[100%] max-w-[430px] bg-white absolute z-50 ">
<div className='flex justify-center flex-col items-center w-[100%]'>
<div className='flex justify-center items-center  bg-[#f0f0f0]  h-[80px] w-[100%]'>
<div className='flex justify-between items-center w-[90%]'>
<div className='flex justify-start  flex-col  w-[90%]'>
<p className='text-[14px] text-[#062A27]  orelega-one-regular'>The</p>
<p className='text-[16px] text-[#062A27] mt-[-5px] flex '><p className='orelega-one-regular text-[20px]'>Sentiments Co.</p> &trade;</p>
</div>
<div onClick={handleslideclose} className='flex justify-center items-center border border-[#E5D6C5] bg-white w-[25px] h-[25px] rounded-[50%]'>
<img className='w-[8px]' src={cross}/>
</div>
</div>
</div>
<div className='flex justify-start flex-col w-[90%] '>
<div onClick={handleclick}  className='flex cursor-pointer justify-start items-center mt-5  border-b border-[#DAEAE8] pb-5 w-[100%]'>
<img className='w-[25px]' src={user}/>
<p className='Satoshi-bold text-[14px] ml-2'>My Account</p>
</div>
<div className='flex justify-start cursor-pointer items-center mt-5  border-b border-[#DAEAE8] pb-5 w-[100%]'>
<img className='w-[25px]' src={store}/>
<p className='Satoshi-bold text-[14px] ml-2'>Vist Store</p>
</div>
<div className='flex justify-start cursor-pointer items-center mt-5  border-b border-[#DAEAE8] pb-5 w-[100%]'>
<img className='w-[25px]' src={update}/>
<p className='Satoshi-bold text-[14px] ml-2'>Updates</p>
</div>
<div className='flex justify-start cursor-pointer items-center mt-5  border-b border-[#DAEAE8] pb-5 w-[100%]'>
<img className='w-[25px]' src={help}/>
<p className='Satoshi-bold text-[14px] ml-2'>Help Center</p>
</div>
<div onClick={handlelogout} className='flex justify-start cursor-pointer items-center mt-5   pb-5 w-[100%]'>
<img className='w-[25px]' src={logout}/>
<p className='Satoshi-bold text-[14px] ml-2 text-[red]'>Sign Out</p>
</div>
</div>
</div>
  </div>
</>
  )
}
