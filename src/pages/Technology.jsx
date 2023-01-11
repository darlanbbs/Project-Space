import {useState,useEffect} from 'react'
import './Technology.css'

import {VehicleOne} from '../vehicles/VehicleOne'
export const Technology = () => {
  const [background,setBackground] = useState('url(../../src/images/technology/background-technology-desktop.jpg) no-repeat bottom center scroll')
  let backgroundImagePosition = '30% 100%'
  let backgroundImageSize = 'cover'

  useEffect(() => {
   setBackground('url(../../src/images/technology/background-technology-desktop.jpg) no-repeat bottom center scroll')
   document.body.style.background = background
   document.body.style.backgroundPosition = backgroundImagePosition
   document.body.style.backgroundSize = backgroundImageSize
   
  
  }, [background])
  return (
    <div>
      <VehicleOne/>
    </div>
  )
}
