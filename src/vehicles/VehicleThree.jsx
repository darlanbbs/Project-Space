import './Global.css'
import {Row,Col} from 'reactstrap'
import {NavLink} from 'react-router-dom'


export const VehicleThree = () => {
  return (
    <div className='technology'>
     <Row xxl='2' xl='2' lg='2'  className='bothSides'>
       <Col className="coluna">
         <div className="leftSide">
             <div className="titleDestination">
                <h1 className='pickDestination'><span>03</span> SPACE LAUNCH 101</h1>
            </div>
            <div className="circles">
                <ul className="circleList">
                    <NavLink to='/technology/1' className='circleLink' >1</NavLink>
                   
                    <NavLink to='/technology/2' className='circleLink' >2</NavLink >
                      
                    <div className="titleVehicle">
                     </div>
                    <NavLink to='/technology/3' className='circleLink'  style={{backgroundColor:'white',color:'black'}}>3</NavLink>
                </ul>
                <div className="firstLink">
              <div className="vehicleTexts">
                    <p className='preTitle'>the terminology...</p>
                        <h1 className='title'><strong>Space capsule</strong></h1>
                        <p className='textVehicle'>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry  capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained</p>
                    </div>
            </div>
            </div>
         </div>
       </Col>
    <Col className="coluna rightSideVehicles">
        <div className="">
            <div className="imagem">
                <img className='image' src="../../src/images/technology/image-space-capsule-landscape.jpg" alt="image-space-capsule-landscape" />
            </div>
        </div>
    </Col>
  </Row>
    </div>
  )
}

                     

