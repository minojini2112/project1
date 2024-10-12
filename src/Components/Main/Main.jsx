import React from 'react'
import User from '../../assets/User.png'
import Compass from "../../assets/Compass.png"
import Bulb from "../../assets/lightbulb.png"
import Message from "../../assets/Message.png"
import Code from "../../assets/Code.png"
import Gallery from "../../assets/gallery.png"
import Mic from "../../assets/mic.png"
import Send from "../../assets/send.png"


const Main = () => {
  return (
    <div className='relative flex-1 pb-[15vh] h-screen'> {/*main*/}
        <div className='flex items-center justify-between text-[22px] p-[20px] text-[#585858]'> {/*nav*/}
            <p>Gemini</p>
            <img src={User} alt="Userimg" className='w-[50px] rounded-2xl'/>
        </div>
        <div className='main-container my-0 max-w-[900px] mx-auto'> {/*main-container*/}
          <div className=' greet text-[50px] text-[#c4c7c5] font-medium p-[10px]'> {/*greet*/}
            <p><span>Hello, Mino.</span></p>
            <p>How can I help you today?</p>
          </div>
          <div className="cards grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-[15px] p-[20px]">     {/*cards*/}
            <div className='card h-[150px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]'>    {/*card*/}
                 <p className='text-[#585858] text-[17px]'>Suggest beautiful places to see on an upcoming road trip</p>  
                 <img src={Compass} alt="Compass" className='w-[35px] p-[5px] absolute bg-white bottom-[20px] right-[10px] rounded-[20px]' />            
            </div>
            <div className='card h-[150px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]'>    {/*card*/}
                 <p className='text-[#585858] text-[17px]'>Briefly summarize this concept : urban planning</p>  
                 <img src={Bulb} alt="Bulb" className='w-[35px] p-[5px] absolute bg-white bottom-[20px] right-[10px] rounded-[20px]' />            
            </div>
            <div className='card h-[150px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]'>    {/*card*/}
                 <p className='text-[#585858] text-[17px]'>Brainstorm team bonding activities for our work retreat</p>  
                 <img src={Message} alt="Message" className='w-[35px] p-[5px] absolute bg-white bottom-[20px] right-[10px] rounded-[20px]' />            
            </div>
            <div className='card h-[150px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]'>    {/*card*/}
                 <p className='text-[#585858] text-[17px]'>Improve the readability of the following code</p>  
                 <img src={Code} alt="Code" className='w-[35px] p-[5px] absolute bg-white bottom-[20px] right-[10px] rounded-[20px]' />            
            </div>
          </div>
          {/* Move the main-bottom section right after the cards */}
          <div className='main-bottom w-[100%] max-w-[900px] px-[0px] py-[20px] mx-auto'> {/*main-bottom*/}
            <div className='search-box flex items-center justify-between gap-[20px] bg-[#f0f4f9] px-[10px] py-[15px] rounded-[50px]'> {/*search-box*/}
              <input className='flex-1 bg-transparent border-none outline-none p-[8px] text-[18px]' placeholder="Enter a prompt here"/>
              <div className='flex gap-[10px]'>
                <img src={Gallery} alt="gallery" className='w-[24px] cursor-pointer'/>
                <img src={Mic} alt="mic" className='w-[24px] cursor-pointer'/>
                <img src={Send} alt="send" className='w-[24px] cursor-pointer'/>
              </div>
            </div>
            <p className='text-[13px] text-[#585858] mx-[15px] my-0 text-center font-light'>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and GeminiApps</p>
          </div>
        </div>
    </div>
  )
}

export default Main
