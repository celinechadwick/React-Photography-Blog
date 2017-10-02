//send the photo id here and then render the proper url from flickr with this photo id inserted
//Also render the tag list
//stretch goal: render them as chips from materialize. onClick they should perform a get
//request by tag name and render the page with photos matching this tag
//or this could just be done in anoth4er component that just has the tag list displayed as chips

import React, {Component} from 'react';

class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled:false
    }
  }

  // testClick(){
  //   console.log('hi from Photo.js')
  //   console.log(this.props)
  // }


render() {
  return (
    <div onClick={(e) => this.props.handleClick(e)}>
      <img src={this.props.photo.url_m} />
    </div>
  )
}


}


export default Photo;
