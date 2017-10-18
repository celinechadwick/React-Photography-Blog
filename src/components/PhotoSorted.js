//send the photo id here and then render the proper url from flickr with this photo id inserted
//Also render the tag list
//stretch goal: render them as chips from materialize. onClick they should perform a get
//request by tag name and render the page with photos matching this tag
//or this could just be done in anoth4er component that just has the tag list displayed as chips

import React, {Component} from 'react';
import {Col, Row, CardPanel} from 'react-materialize';
const photobackStyle= {'height':'300px','border':'1px solid', 'max-width':'350px'};

class PhotoSorted extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoToggled:false
    }
  }
  handleClick(e) {
    console.log(e.target)
  this.setState({photoToggled: !this.state.photoToggled});
  console.log("clicked", this.props.photoToggled);
  //when the photo front is clicked it should change phototoggled to true, thereby flipping the image back in the render

  }

  handleSwitchFront(event) {
  this.setState({photoToggled: !this.state.photoToggled});
  console.log("clicked", this.state.photoToggled);
  //when the photoback is clicked it should change phototoggled to false, thereby flipping the image back in the render
  }
  // testClick(){
  //   console.log('hi from Photo.js')
  //   console.log(this.props)
  // }

render() {

  if (this.state.photoToggled) {
    return (
      <Row>
        <Col s={6}>
          <CardPanel onClick={this.handleSwitchFront.bind(this)} style={photobackStyle}>
            <h4>
              {this.props.photosByTag.title}
            </h4>
            <p>
              {this.props.photosByTag.description._content}
            </p>
          </CardPanel>
        </Col>
      </Row>
      )
    } else {
  return (
    <Row>
      <Col s={6}>
          <img src={this.props.photosByTag.url_m} onClick={this.handleClick.bind(this)}/>
      </Col>
    </Row>
  )
}
}


}

export default PhotoSorted;
