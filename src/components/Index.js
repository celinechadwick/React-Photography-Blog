import React, {Component} from 'react';
import axios from 'axios';
import Photo from './Photo';
import PhotoBack from './Photoback';
import Masonry from 'react-masonry-component';
import {Row, Icon, Input} from 'react-materialize';

var masonryOptions = {
    transitionDuration: 0
};
var style = {

};
var gridStyle = {
  height: '120px',
  width: '20%',
  'float': 'left'
}


class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos:[],
      search:'',
      searchResult: null,
      photoToggled: false
    }
  };

componentDidMount() {
  axios
  .get(`https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=fc458eef7fd9cf9f5f3206e32fd6f6d6&user_id=147813786%40N08&extras=description%2C+date_upload%2C+geo%2C+tags%2C+machine_tags%2C+o_dims%2C+views%2C+media%2C+path_alias%2C+url_sq%2C+url_t%2C+url_s%2C+url_q%2C+url_m%2C+url_n%2C+url_z%2C+url_c%2C+url_l%2C+url_o&per_page=500&format=json&nojsoncallback=1&auth_token=72157688536926116-fa546cf26e7f9fda&api_sig=75375135b574c6970f13f6e6aa084e39`)
  .then((response) => {
    this.setState({
      photos: response.data.photos.photo
    });
    console.log(this.state.photos, "api data");

  })
  .catch((err) => {
    console.log(err, "get not working");
  })
}
handleClick(event) {
this.setState({photoToggled: true});
console.log("clicked", this.state.photoToggled);
//when the photo front is clicked it should change phototoggled to true, thereby flipping the image back in the render

}

handleSwitchFront(event) {
this.setState({photoToggled: false});
console.log("clicked", this.state.photoToggled);
//when the photoback is clicked it should change phototoggled to false, thereby flipping the image back in the render
}



render() {
  const photoToggled = this.state.photoToggled;
  console.log(photoToggled);

  return (
    <div>
        <Masonry
          className={'my-gallery-class'} // default ''
          elementType={'ul'} // default 'div'
          options={masonryOptions} // default {}
          disableImagesLoaded={false} // default false
          updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
          style={style}
      >

        {this.state.photos.map((photo) => {
          if (photoToggled) {
            return (
                <PhotoBack key={photo.id} photo={photo} onClick={this.handleSwitchFront.bind(this, this.state.photo)} className='grid-item' style={gridStyle}/>
            )
              } else {
                return (
                    <Photo key={photo.id} photo={photo} onClick={this.handleClick.bind(this, this.state.photo)} className='grid-item'/>

                )

            }
        }) }
      </Masonry>
    </div>
    )
  }

}
export default Index
