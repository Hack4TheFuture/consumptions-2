import React from 'react'
import './Home.css'
import Slider from './Slider'
import support from '../../assets/support.png'

function Home() {
  return (
    <>
       
        <div className='home' id="home">
        <Slider/>
      
          <div className='homeContent'>
         
             {/* <div className='textContainer'>
             
              <div className='quote'>
              <q>It’s easier to take than to give. It’s nobler to give than to take. The thrill of taking lasts a day. The thrill of giving lasts a lifetime.</q><small>~Joan Marques~</small>
              </div>
             </div> */}
       
                  <div className="btngroup">
                  <button  className="subscribe btn">Subscibe</button>
              <button className='more btn'><span></span>donate</button>
              </div>
              
         </div> 
      
    </div>
   
     
     </>
  )
}

export default Home