//send the photo id here and then render the proper url from flickr with this photo id inserted
//Also render the tag list
//stretch goal: render them as chips from materialize. onClick they should perform a get
//request by tag name and render the page with photos matching this tag
//or this could just be done in anoth4er component that just has the tag list displayed as chips

import React, {Component} from 'react';
import {Col, Row, CardPanel, MediaBox} from 'react-materialize';


class Photo extends Component {
  constructor(props) {
    super(props);

  }


render() {

if (!this.props.likes) {
  return (
    <Col s={12} style={{margin:'10px'}}>
    <MediaBox src={this.props.photo.url_l} className="responsive-img center-align" width="60%" caption={this.props.photo.description._content} style={{margin:'0 auto'}}/>
    </Col>
  )
} else {
    return(
      <Col s={12} style={{margin:'auto'}}>
      <MediaBox src={this.props.photo.url_l} className="responsive-img" width="60%" style={{margin:'10px auto'}}/>
      </Col>
    )
  }
}

}


export default Photo;
