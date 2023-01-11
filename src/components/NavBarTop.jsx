import { useState } from 'react'
import './NavBarTop.css'
import {NavLink} from 'react-router-dom'

export const NavBarTop = () => {
  const [isActive,setIsActive] = useState(false)
  const onClick = () => setIsActive(!isActive)

  return (
    <nav>
      <div className="logo">
        <a href="/home">
          <img className={`ativado ${isActive ? 'hide' : 'nothing'}`} src="../../src/images/shared/logo.svg" alt="Logo" />
        </a>
       
        <div className="traco"></div>
      </div>
      <div className={`menu ${isActive ? "ativado" : "desativado" }`}>
        <div className="botoes">
          <button>
            <NavLink to='/home' className='link'><span className='numbers'>00 </span> Home</NavLink>
           </button>
         <button>
            <NavLink to='/destination' className='link'><span className='numbers'>01 </span> Destination</NavLink>
          </button>
          <button>
             <NavLink to='/crew' className='link'><span className='numbers'>02 </span> Crew</NavLink>
          </button>
          <button>
             <NavLink to='/technology' className='link'><span className='numbers'>03 </span> Technology</NavLink>
          </button>
          <button className='toggleButtons' onClick={onClick}>
            {!isActive &&<img src='../src/images/shared/icon-hamburger.svg'></img>}
            {isActive &&<img src='../src/images/shared/icon-close.svg'></img>}
          </button>
         </div>
      </div>
    </nav>
  )
}

          