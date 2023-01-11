import {useState,useEffect} from 'react'
import './Home.css'
import {Row,Col} from 'reactstrap'


export const Home = () => {
  const [background,setBackground] = useState('url(../../src/images/home/background-home-desktop.jpg) no-repeat bottom center scroll')
  let backgroundImagePosition = '30% 100%'
  let backgroundImageSize = 'cover'

  useEffect(() => {
   setBackground('url(../../src/images/home/background-home-desktop.jpg) no-repeat bottom center scroll')
   document.body.style.background = background
   document.body.style.backgroundPosition = backgroundImagePosition
   document.body.style.backgroundSize = backgroundImageSize
   
  
  }, [background])
  return (
    <div className='home'>
      <Row xxl='2' xl='2' lg='2' md='2' sm='1' xs='1' className='bothSides'>
        <Col className="coluna">
        <div className="leftSide">
          <div className="titleHome">
            <h1 className='titleText'>SO,YOU WANT TO TRAVEL TO</h1>
         </div>
          <div className="space">
            <h1><strong className='spaceU'>SPACE</strong></h1>
          </div>
          <div className="spaceText">
            Let’s face it; if you want to go to space, you might as well genuinely go to 
             outer space and not hover kind of on the edge of it. Well sit back, and relax 
             because we’ll give you a truly out of this world experience!
          </div>
        </div>
        </Col>
          <Col className=" coluna">
              <div className="rigthSide">
                <div className="circle">
                    <div className="circleText">
                       EXPLORE
                    </div>
                 </div>
             </div>
          </Col>
      </Row>
    </div>
  )
}












{/* <div className="container">
  <div className="leftSide">
    <div className="titleHome">
      <h1>SO,YOU WANT TO TRAVEL TO</h1>
    </div>
    <div className="space">
       <h1><strong>SPACE</strong></h1>
    </div>
  </div>
  <div className="spaceText">

  </div>
</div> */}