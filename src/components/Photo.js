//send the photo id here and then render the proper url from flickr with this photo id inserted
//Also render the tag list
//stretch goal: render them as chips from materialize. onClick they should perform a get
//request by tag name and render the page with photos matching this tag
//or this could just be done in anoth4er component that just has the tag list displayed as chips

import React, {Component} from 'react';
import Photoback from './Photoback';

class Photo extends Component {
  constructor(props) {
    super(props);
    }




render() {
  return (
    <div>
    <img src={this.props.photo.url_s} />
    </div>
  )
}


}


export default Photo;
