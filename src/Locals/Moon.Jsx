import './Global.css'
import {Row,Col} from 'reactstrap'
import {NavLink} from 'react-router-dom'

export const Moon = () => {
  return (
    <Row xxl='2' xl='2' lg='2' md='2' sm='1' xs='1' className='bothSides'>
        <Col className="coluna" xs="6">
            <div className="leftSide">
                <div className="titleDestination">
                    <h1 className='pickDestination'><span>01</span> PICK YOUR DESTINATION</h1>
                </div>
                <div className="imagemLocal">
                    <img className='imageLocals' src="../src/images/destination/image-moon.png" alt="" />
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
          <div className="localName">MOON</div>
          <div className="localText">    
  See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
  regain perspective and come back refreshed. While you’re there, take in some history 
  by visiting the Luna 2 and Apollo 11 landing sites.
          </div>
        </div>
        <div className="underInfos">
            <div className="localDistance">
              <span className='avg'>AVG. Distance</span>
              <h1 className='distance'>384,400 km</h1>
           </div>
           <div className="localTravel">
             <span className='avg'>EST. TRAVEL TIME</span>
             <h1 className='distance'>3 days</h1>
          </div>
        </div>
    </div>
        </Col>
  </Row>
    
  )
}


