import {React,useState,useEffect }from 'react'
import { NavLink } from 'react-router-dom'
import './Global.css'
import { Row,Col } from 'reactstrap'

export const Pilot = () => {
    const [background,setBackground] = useState('url(../../src/images/crew/background-crew-desktop.jpg) no-repeat bottom center scroll')
  let backgroundImagePosition = '30% 45%'
  let backgroundImageSize = 'cover'

  useEffect(() => {
   setBackground('url(../../src/images/crew/background-crew-desktop.jpg) no-repeat bottom center scroll')
   document.body.style.background = background
   document.body.style.backgroundPosition = backgroundImagePosition
   document.body.style.backgroundSize = backgroundImageSize
   
  
  }, [background])
  return (
    <div>
        <Row xxl='2' xl='2' lg='2' md='2' sm='1' xs='1' className=' bothSides'>
            <Col className="  coluna" xs="6">
                <div className="leftSide">
                    <div className="titleCrew">
                        <h1 className='chooseCrew'><span>02</span> MEET YOUR CREW</h1>
                    </div>

                    <div className="jobCrew">
                        <h1 className='job'>Pilot</h1>
                        <h1 className="nameCrew" style={{textAlign:'center'}}>Victor Glover</h1>
                        <p className="textCrew"> Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. </p>
                    </div>
                    <div className="underInfosCrew">
                        <ul className="links">
                            <li>
                                <NavLink to='/crew/commander' className='circleLinkCrew'></NavLink>
                            </li>
                            <li>
                                 <NavLink to='/crew/engineer' className='circleLinkCrew'></NavLink>
                            </li>
                            <li>
                                <NavLink to='/crew/pilot' className='circleLinkCrew'  style={{backgroundColor:'white'}}></NavLink>
                            </li>
                            <li>
                                 <NavLink to='/crew/specialist' className='circleLinkCrew' ></NavLink>
                            </li>
                        </ul>
                    </div>
                 </div>
            </Col>
             <Col className="coluna" xs="6">
                  <div className="rightSide">
                    <div className="imagem">
                        <img className="image" src="../../src/images/crew/image-victor-glover.webp" alt="" />
                    </div>
                  </div>
            </Col>
        </Row>
    </div>
  )
}
