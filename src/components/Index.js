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
  .get(` https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=03196e90cdccd5d34d38debfb755a217&user_id=147813786%40N08&extras=description%2C+date_upload%2C+geo%2C+tags%2C+machine_tags%2C+o_dims%2C+views%2C+media%2C+path_alias%2C+url_sq%2C+url_t%2C+url_s%2C+url_q%2C+url_m%2C+url_n%2C+url_z%2C+url_c%2C+url_l%2C+url_o&per_page=500&format=json&nojsoncallback=1&auth_token=72157685253175352-e15121ce19dade1f&api_sig=0805e0c6ec07bc147a18480412850b77`)
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

handleSubmit(event) {
  event.preventdefault();
  axios.get()
  //Either search by tag OR use the object given back to search
  //If it is in the object, write a function that will take matching tags
  //and render them
}
handleChange(event) {
  console.log(event.target.name, event.target.value);
  this.setState({
    [event.target.name]: event.target.value
  });
}
// {this.state.searchResult ? <Photo key={this.state.searchResult.id} photo={this.state.searchResult} /> : ""}
render() {
  const photoToggled = this.state.photoToggled;
  console.log(photoToggled);

  return (
    <div>
        <div>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
             Search By Tag
            </div>

            <div>
            <input onChange={this.handleChange.bind(this)} name='search' type='text' className='form-control' />
            </div>

            <div>
            <button type='submit'>Submit</button>
            </div>
          </form>
        </div>
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

                <PhotoBack key={photo.id} photo={photo} onClick={this.handleSwitchFront.bind(this, this.state.photo)} className='grid-item'/>
            )
              } else {
                return (
                    <Photo key={photo.id} photo={photo} onClick={this.handleClick.bind(this, this.state.photo)}/>
                )

            }
        }) }
      </Masonry>
    </div>
    )
  }

}
export default Index
