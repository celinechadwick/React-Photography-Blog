//send the photo id here and then render the proper url from flickr with this photo id inserted
//Also render the tag list
//stretch goal: render them as chips from materialize. onClick they should perform a get
//request by tag name and render the page with photos matching this tag
//or this could just be done in anoth4er component that just has the tag list displayed as chips

import React, {Component} from 'react';
import {Col, Card} from 'react-materialize';
const photobackStyle= {'height':'300px','border':'1px solid'};

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
      <Col l={6} s={12}>
        <div onClick={this.handleSwitchFront.bind(this)} style={photobackStyle}>
          <div>
            {this.props.photo.title}
          </div>
          <div>
            {this.props.photo.description.content}
          </div>
          <div>
            {this.props.photo.tags}
          </div>
        </div>
      </Col>
      )
    } else {
  return (
    <div className="col s12 m6">
    <div className="card large">
      <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src={this.props.photo.url_m}/>
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{this.props.photo.title}<i className="material-icons right">more_vert</i></span>
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">{this.props.photo.title}<i className="material-icons right">close</i></span>
      <p>{this.props.photo.description.content}</p>
    </div>
    </div>
    </div>
  )
}
}


}


export default Photo;
