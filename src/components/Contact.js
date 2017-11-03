import React, {Component} from 'react';
import {Col, Row, MediaBox, Divider} from 'react-materialize'
const padding= {padding:'0px', 'margin':'40px'}
class Contact extends Component {

render() {
  return (
    <div style={{'font-family':'Roboto'}}>
    <Row>
      <Col s={12} style={{padding:'0 10% 5%'}}>
        <div className="center-align flow-text" style={{padding:'20px', fontWeight:'400', 'margin-top':'40px', fontSize:'30px'}}>About Me</div>
          <div className="col s12" style={{"margin":'0 auto 80px auto'}}>
            <span className="flow-text center">
              I recently started photography in February, and have used 35mm film, medium-format, as well as full-frame digital. My biggest challenge is
              photographing subjects close up, and I am still overcoming my aversion to it. My favorite street photography is wide angle and personal, so
              it is a hurdle that I am eager to overcome.
            </span>
          </div>

      </Col>

      <div className="center-align flow-text" style={{padding:'20px', fontWeight:'400', margin:'30px', fontSize:'30px'}}>Film Cameras</div>
          <Col s={12} className="flow-text center" style={{margin:'10px'}}>
              <MediaBox src="https://i0.wp.com/www.casualphotophile.com/wp-content/uploads/2016/07/Nikon-FE-Film-Camera-Review-1-of-4-e1470838053362.jpg?resize=1080%2C608&ssl=1"  width="80%" style={{'padding':'0 40px', 'max-width':'80%','margin':'0 auto'}}/>
              <div style={{'padding':'0 12% 10% 12%'}}>
              <h4 className="center-align flow-text" style={{fontWeight:'400'}}>Nikon FE </h4>
                <div className= "span">
                  My first camera, the Nikon FE. I loved it, but I wanted one with a faster shutter speed, so I traded it out for the FE-2. The FE has a brighter lightmeter,
                   while the FE-2 is only illuminated by ambient light. I was intrigued by playing with double-exposures, which this camera does not allow for.
                </div>
                <div className="center" style={{'margin':'15px'}}>
                <a href="https://www.casualphotophile.com/2016/07/08/nikon-fe-camera-review/" target="_blank" style={{'font-size':'18px'}}>Read a review here</a>
                </div>
            </div>
          </Col>

          <Col s={12} className="flow-text center" style={{margin:'10px'}}>
              <MediaBox src="http://static1.squarespace.com/static/510fa0a8e4b0b75977462dbe/560a90cfe4b01f615422eabe/560a90d2e4b01f615422ede3/1443533010175/dsc_7397.jpg?format=original" width="80%" style={{'padding':'0 40px', 'max-width':'80%','margin':'0 auto'}}/>
            <div style={{'padding':'0 12% 10% 12%'}}>
            <h4 className="center-align flow-text" style={{fontWeight:'400'}}>Nikon FE-2 </h4>
              <div className= "span">
                This camera was much nicer, although the lightmeter can be hard to read in the dark. I was excited to use the double exposure tab,
                only to realize that it can accientally get switched on from its perplexing positioning on the shutter button.
              </div>
              <div className="center" style={{'margin':'15px'}}>
                <a href="https://filmphotographyproject.com/content/reviews/2011/08/fpp-review-nikon-fe2-step/" target="_blank" style={{'font-size':'18px'}}>Read a review here</a>
              </div>
            </div>
          </Col>

          <Col s={12} className="flow-text center" style={{margin:'10px'}}>
            <MediaBox src="https://i.imgur.com/mwXcazk.jpg" width="80%" style={{'padding':'0 40px', 'max-width':'80%','margin':'0 auto'}}/>
            <div style={{'padding':'0 12% 10% 12%'}}>
            <h4 className="center-align flow-text" style={{fontWeight:'400'}}>Hasselblad 1000f </h4>
              <div className= "span">
                This was my Great-grandfather's camera. My Great-grandmother gave it to me when I finished school, but I haven't had a chance to use it extensively.
                There is nothing quite like framing shots in the waist-level viewfinder! I also love the square images it produces.
              </div>
                <div className="center" style={{'margin':'15px'}}>
                <a href="http://www.ericconstantineau.com/photo/review_hasselblad1000_en.html" target="_blank" style={{'font-size':'18px'}}>Read a review here</a>
                </div>
            </div>
          </Col>
          <Divider />

          <div className="center-align flow-text" style={{padding:'20px', fontWeight:'400', margin:'30px', fontSize:'30px'}}>Digital Cameras</div>
              <Col s={12} className="flow-text center" style={{margin:'10px'}}>
                  <MediaBox src="http://78.media.tumblr.com/2f8ae6823b08fca40ad51f5498cd36c1/tumblr_nrrywv4NUg1qb4phro1_r1_1280.jpg"  width="80%" style={{'padding':'0 40px', maxWidth:'80%','margin':'0 auto'}}/>
                  <div style={{padding:'0 12% 10% 12%'}}>
                  <h4 className="center-align flow-text" style={{fontWeight:'400'}}>Sony A7 </h4>
                    <div className= "span">
                      I got the Sony Alpha because the full-frame sensor produces higher quality images, and because it is the same size as a strip of 35mm film. This means that I can use all my
                      manual Nikkor lenses on my Sony (with the help of a $15 adaptor), and still get light-metering and focus peaking. I use the kit lens, as well as my 24mm, 50mm and 105mm
                      prime lenses. One downside to this camera is the lack of image stabilization in the body, although I am not usually bothered by this. I am bothered by the loud shutter, however,
                      which makes it hard to shoot stealthily.
                      I would recommend the A7ii, which has excellent reviews.

                    </div>
                    <div className="center" style={{margin:'15px'}}>
                    <a href="https://www.dpreview.com/reviews/sony-alpha-a7" target="_blank" style={{fontSize:'18px'}}>Read a review here</a>
                    </div>
                </div>
              </Col>




    </Row>

    </div>


  )
}


}

export default Contact
