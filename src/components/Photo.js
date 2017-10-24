//send the photo id here and then render the proper url from flickr with this photo id inserted
//Also render the tag list
//stretch goal: render them as chips from materialize. onClick they should perform a get
//request by tag name and render the page with photos matching this tag
//or this could just be done in anoth4er component that just has the tag list displayed as chips

import React, {Component} from 'react';
import {Col, Row, CardPanel} from 'react-materialize';


class Photo extends Component {
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
      <Col s={12} className='center-align'>
        <CardPanel onClick={this.handleSwitchFront.bind(this)} className="flow-text" style={{height: this.props.photo.height_l, width: this.props.photo.width_l, padding:'40px'}}>
          <h4>
            {this.props.photo.title}
          </h4>
          <p>
            {this.props.photo.description._content}
          </p>
        </CardPanel>
      </Col>
      )
    }  else {
  return (
    <Col s={12} className='center-align'>
        <img src={this.props.photo.url_l} className="responsive-img" onClick={this.handleClick.bind(this)} style={{padding:'40px'}}/>
    </Col>
  )
}
}


}


export default Photo;
