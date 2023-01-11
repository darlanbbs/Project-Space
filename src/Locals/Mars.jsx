
import './Global.css'
import {Row,Col} from 'reactstrap'
import {NavLink} from 'react-router-dom'

export const Mars = () => {
  return (
    <Row xxl='2' xl='2' lg='2' md='2' sm='1' xs='1' className='bothSides'>
        <Col className="coluna" xs="6">
            <div className="leftSide">
                <div className="titleDestination">
                    <h1 className='pickDestination'><span>01</span> PICK YOUR DESTINATION</h1>
                </div>
                <div className="imagemLocal">
                    <img src="../src/images/destination/image-mars.png" alt="" />
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
          <div className="localName">MARS</div>
          <div className="localText">
            Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
            the tallest planetary mountain in our solar system. It’s two and a half times 
            the size of Everest!
          </div>
        </div>
        <div className="underInfos">
            <div className="localDistance">
              <span className='avg'>AVG. Distance</span>
              <h1 className='distance'>225 MIL. KM</h1>
           </div>
           <div className="localTravel">
             <span className='avg'>EST. TRAVEL TIME</span>
             <h1 className='distance'>9 MONTHS</h1>
          </div>
        </div>
    </div>
        </Col>
  </Row>
    
  )
}


