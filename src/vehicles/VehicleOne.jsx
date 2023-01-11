import './Global.css'
import {Row,Col} from 'reactstrap'
import {NavLink} from 'react-router-dom'


export const VehicleOne = () => {
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
                    <NavLink to='/technology/1' className='circleLink'  style={{backgroundColor:'white',color:'black'}}>1</NavLink>
                   
                    <NavLink to='/technology/2' className='circleLink' >2</NavLink >
                      
                    <div className="titleVehicle">
                     </div>
                    <NavLink to='/technology/3' className='circleLink' >3</NavLink>
                </ul>
                <div className="firstLink">
              <div className="vehicleTexts">
                    <p className='preTitle'>the terminology...</p>
                        <h1 className='title'><strong>Launch Vehicle</strong></h1>
                        <p className='textVehicle'> A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
                    </div>
            </div>
            </div>
         </div>
       </Col>
    <Col className="coluna rightSideVehicles">
        <div className="">
            <div className="imagem">
                <img className='image' src="../../src/images/technology/image-launch-vehicle-landscape.jpg" alt="image-launch-vehicle" />
            </div>
        </div>
    </Col>
  </Row>
    </div>
  )
}

                     