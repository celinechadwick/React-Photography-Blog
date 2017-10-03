import React, {Component} from 'react';
import axios from 'axios';
import Photo from './Photo';
import PhotoBack from './Photoback';
import Masonry from 'react-masonry-component';

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
    }
  };

componentDidMount() {
  axios
  .get(`https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=128beebe90a24a0b382db91c7e912429&user_id=147813786%40N08&extras=description%2C+license%2C+date_upload%2C+date_taken%2C+owner_name%2C+icon_server%2C+original_format%2C+last_update%2C+geo%2C+tags%2C+machine_tags%2C+o_dims%2C+views%2C+media%2C+path_alias%2C+url_sq%2C+url_t%2C+url_s%2C+url_q%2C+url_m%2C+url_n%2C+url_z%2C+url_c%2C+url_l%2C+url_o&per_page=500&format=json&nojsoncallback=1`)
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

// How to pass a function in the parent component to the child component:
// <Photo key={photo.id} photo={photo} handleClick={this.handleClick.bind(this)} className='grid-item'/>


render() {

  return (
    <div>

        {this.state.photos.map((photo) => {
            return (
              <Photo key={photo.id} photo={photo}  className='grid-item'/>
                )


        }) }
    </div>
    )
  }

}
export default Index
