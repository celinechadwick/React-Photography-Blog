import React, {Component} from 'react';
import axios from 'axios';
import Photo from './Photo';
import PhotoBack from './Photoback';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos:[],
      search:'',
      searchResult: null
    }
  };

componentDidMount() {
  axios
  .get(`https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=17c082e7f57e5e85da55a2e096bc3aa2&user_id=147813786%40N08&extras=description%2C+date_upload%2C+original_format%2C+geo%2C+tags%2C+machine_tags%2C+o_dims%2C+views%2C+media%2C+path_alias%2C+url_sq%2C+url_t%2C+url_s%2C++url_l%2C+url_o&per_page=500&format=json&nojsoncallback=1`)
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
render() {
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

        {this.state.searchResult ? <Photo key={this.state.searchResult.id} photo={this.state.searchResult} /> : ""}
        {this.state.photos.map((photo) => {
            return (
              <Photo key={photo.id} photo={photo} />
            );
        }) }
    </div>
    )
  }

}
export default Index
