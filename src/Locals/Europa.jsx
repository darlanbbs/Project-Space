import React from 'react'
import './Global.css'
import {Row,Col} from 'reactstrap'
import {NavLink} from 'react-router-dom'

export const Europa = () => {
  return (
    <Row xxl='2' xl='2' lg='2' md='2' sm='1' xs='1' className='bothSides'>
        <Col className="coluna" xs="6">
            <div className="leftSide">
                <div className="titleDestination">
                    <h1 className='pickDestination'><span>01</span> PICK YOUR DESTINATION</h1>
                </div>
                <div className="imagemLocal">
                    <img src="../src/images/destination/image-europa.png" alt="" />
                 </div>
            </div>
        </Col>
         <Col className="coluna" xs="6">
    <div className="rightSide">
        <div className="locals">
              <button>
                <NavLink to='/destination/moon' className='link'>Moon</NavLink>
              </button>
              <button>
                <NavLink to='/destination/mars' className='link'>Mars</NavLink>
              </button>
              <button>
                <NavLink to='/destination/europa' className='link'>Europa</NavLink>
              </button>
              <button>
                 <NavLink to='/destination/titan' className='link'>Titan</NavLink>
             </button>
        </div>
        <div className="localInfo">
          <div className="localName">EUROPA</div>
          <div className="localText">
          The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
           winter lover’s dream. With an icy surface, it’s perfect for a bit of 
            ice skating, curling, hockey, or simple relaxation in your snug 
            wintery cabin.
          </div>
        </div>
        <div className="underInfos">
            <div className="localDistance">
              <span className='avg'>AVG. Distance</span>
              <h1 className='distance'>628 mil. km</h1>
           </div>
           <div className="localTravel">
             <span className='avg'>EST. TRAVEL TIME</span>
             <h1 className='distance'>3 years</h1>
          </div>
        </div>
    </div>
        </Col>
  </Row>
    
  )
}


