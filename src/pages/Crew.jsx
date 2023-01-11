import { useState,useEffect } from 'react'
import {Commander} from '../tripulation/Commander'
import './Crew.css'

export function Crew() {
  const [background,setBackground] = useState('url(../../src/images/crew/background-crew-desktop.jpg) no-repeat bottom center scroll')
  let backgroundImagePosition = '30% 100%'
  let backgroundImageSize = 'cover'

  useEffect(() => {
   setBackground('url(../../src/images/crew/background-crew-desktop.jpg) no-repeat bottom center scroll')
   document.body.style.background = background
   document.body.style.backgroundPosition = backgroundImagePosition
   document.body.style.backgroundSize = backgroundImageSize
   
  
  }, [background])
  return(
    <div>
      
     <Commander/>
    </div>
  )
}