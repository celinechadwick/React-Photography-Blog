import React, {Component} from 'react';
import {Col, Row, MediaBox, Divider} from 'react-materialize'
const padding= {padding:'0px', 'margin':'40px'}
class Contact extends Component {

render() {
  return (
    <div>
    <Row>
      <Col s={12} style={{padding:'0 10% 5%'}}>
        <h4 className="center-align flow-text" style={{padding:'20px'}}>About Me</h4>
          <div className="col s12" style={{"margin":'0 auto 80px auto'}}>
            <span className="flow-text">
              I recently started photography in February, and have used 35mm film, medium-format, as well as full-frame digital. My biggest challenge is
              photographing subjects close up, and I am still overcoming my aversion to it. My favorite street photography is wide angle and personal, so
              it is a hurdle that I am eager to overcome.
            </span>
          </div>
      </Col>

      <Divider/>

          <Col s={12} m={6} className="flow-text" style={{margin:'10px'}}>
            <div style={{height:'20%'}}>
              <MediaBox src="https://i0.wp.com/www.casualphotophile.com/wp-content/uploads/2016/07/Nikon-FE-Film-Camera-Review-1-of-4-e1470838053362.jpg?resize=1080%2C608&ssl=1" width="100%"/>
            </div>
            <div style={{padding:'20px 30px 40px 30px'}}>
              <h4 className="center-align flow-text">Nikon FE </h4>
                <div className= "span">
                  My first camera, the Nikon FE. I loved it, but I wanted one with a faster shutter speed, so I traded it out for the FE-2
                </div>
                <div className="center">
                <a href="https://www.casualphotophile.com/2016/07/08/nikon-fe-camera-review/" style={{'font-size':'18px'}}>Read a review here</a>
                </div>
            </div>
          </Col>

          <Col s={12} m={6} className="flow-text" style={{margin:'10px'}}>
            <div style={{height:"50%"}}>
              <MediaBox src="http://static1.squarespace.com/static/510fa0a8e4b0b75977462dbe/560a90cfe4b01f615422eabe/560a90d2e4b01f615422ede3/1443533010175/dsc_7397.jpg?format=original" width='100%'/>
            </div>
            <div style={{padding:'20px 30px 40px 30px'}}>
            <h4 className="center-align flow-text">Nikon FE-2 </h4>
              <div className= "span">
                This camera was much nicer, although the lightmeter can be hard to read in the dark. I was excited to use the double exposure tab,
                only to realize that it can accientally get switched on from its perplexing positioning on the shutter button.
              </div>
              <div className="center">
                <a href="https://filmphotographyproject.com/content/reviews/2011/08/fpp-review-nikon-fe2-step/" style={{'font-size':'18px'}}>Read a review here</a>
              </div>
            </div>
          </Col>

          <Col s={12} m={6} className="flow-text" style={{margin:'10px'}}>
            <MediaBox src="https://i.imgur.com/mwXcazk.jpg" width="100%"/>
            <div style={{padding:'20px 30px 40px 30px'}}>
            <h4 className="center-align flow-text">Hasselblad 1000f </h4>
              <div className= "span">
                This was my Great-grandfather's camera. My Great-grandmother gave it to me when I finished school, but I haven't had a chance to use it extensively.
                There is nothing quite like framing shots in the waist-level viewfinder! I also love the square shots it produces.
              </div>
                <div className="center">
                <a href="http://www.ericconstantineau.com/photo/review_hasselblad1000_en.html" style={{'font-size':'18px'}}>Read a review here</a>
                </div>
            </div>
          </Col>



    </Row>

    </div>


  )
}


}

export default Contact
