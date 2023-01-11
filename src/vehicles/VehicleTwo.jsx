import './Global.css'
import {Row,Col} from 'reactstrap'
import {NavLink} from 'react-router-dom'


export const VehicleTwo = () => {
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
                   
                    <NavLink to='/technology/2' className='circleLink' style={{backgroundColor:'white',color:'black'}}>2</NavLink >
                      
                    <div className="titleVehicle">
                     </div>
                    <NavLink to='/technology/3' className='circleLink' >3</NavLink>
                </ul>
                <div className="firstLink">
              <div className="vehicleTexts">
                    <p className='preTitle'>the terminology...</p>
                        <h1 className='title'><strong>spaceport</strong></h1>
                        <p className='textVehicle'>A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch</p>
                    </div>
            </div>
            </div>
         </div>
       </Col>
    <Col className="coluna rightSideVehicles">
        <div className="">
            <div className="imagem">
                <img className='image'src="../../src/images/technology/image-spaceport-landscape.jpg"  alt="image-spaceport-landscape" />
            </div>
        </div>
    </Col>
  </Row>
    </div>
  )
}

                     


// src="../../src/images/technology/image-spaceport-landscape.jpg" 

// A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch