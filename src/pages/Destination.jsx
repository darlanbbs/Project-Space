import {useState,useEffect} from 'react'

import { Moon } from '../Locals/Moon'

import './Destination.css'

export const Destination = () => {
  const [background,setBackground] = useState('url(../../src/images/destination/background-destination-desktop.jpg) no-repeat bottom center scroll')
  let backgroundImagePosition = '30% 100%'
  let backgroundImageSize = 'cover'

  useEffect(() => {
   setBackground('url(../../src/images/destination/background-destination-desktop.jpg) no-repeat bottom center scroll')
   document.body.style.background = background
   document.body.style.backgroundPosition = backgroundImagePosition
   document.body.style.backgroundSize = backgroundImageSize
   
  
  }, [background])
  return (
    
    <div className='destino'>
       <Moon/>
      </div>
  ) 
}
