import React, {Component} from 'react';
import axios from 'axios';
import Photo from './Photo';
import PhotoBack from './Photoback';
import PhotoSorted from './PhotoSorted'
import {SideNav, NavItem, Navbar, Button, Row, Col, Tag} from 'react-materialize';

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
      //photos from the api call
      tags:[],
      //tags from the flickr api call
      searchResult: null,
      //Search param from clicking on a tag

      photosByTag:[]
      //get for photos BY tag. should only be set when the tagSearch method is called by a click on the actual tag

    }
  };

componentDidMount() {
  axios
  .get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=128beebe90a24a0b382db91c7e912429&user_id=147813786%40N08&tags=monochrome&in_gallery=72157687171218690&extras=+description%2C+license%2C+date_upload%2C+date_taken%2C+owner_name%2C+icon_server%2C+original_format%2C+last_update%2C+geo%2C+tags%2C+machine_tags%2C+o_dims%2C+views%2C+media%2C+path_alias%2C+url_sq%2C+url_t%2C+url_s%2C+url_q%2C+url_m%2C+url_n%2C+url_z%2C+url_c%2C+url_l%2C+url_o&per_page=500&format=json&nojsoncallback=1`)
  .then((response) => {
    this.setState({
      photos: response.data.photos.photo
    });
    console.log(this.state.photos, "api data", this.state.searchResult);

  })
  .catch((err) => {
    console.log(err, "get not working");
  })

axios
  .get(`https://api.flickr.com/services/rest/?method=flickr.tags.getListUser&api_key=128beebe90a24a0b382db91c7e912429&user_id=147813786%40N08&format=json&nojsoncallback=1`)
  .then((response) => {
    this.setState({
      tags: response.data.who.tags
    });
    console.log(this.state.tags, "api tag data");
  })
  .catch((err) => {
    console.log(err, "tag get not working");
  })
}


tagSearch(e) {

  // this.setState({searchResult: });
  console.log("tag clicked", this.state.tags.tag._content);
  //Set the search query for the tag they just clicked on
}

// How to pass a function in the parent component to the child component:
// <Photo key={photo.id} photo={photo} handleClick={this.handleClick.bind(this)} className='grid-item'/>


render() {



  if (this.state.searchResult) {
    return (
      <div>
      <SideNav
      trigger={<Button floating large className='red show-on-large' waves='light' icon='add' />}
      options={{ closeOnClick: true }}
      >
      <h5 className='center'>Tag List</h5>

          {this.state.tags.map((tag) => {
              return (
                <Tag onClick={this.tagSearch.bind(this)}>{this.state.tag._content}</Tag>
              )}
          )}

    </SideNav>
        <Row>
          {this.state.photosByTag.map((photo) => {
              return (
                <PhotoSorted key={photo.id} photo={photo}/>
                  )
          }) }
        </Row>
        </div>
    )
  } else {
    return (
      <div>
        <SideNav
        trigger={<Button floating large className='red show-on-large' waves='light' icon='add' />}
        options={{ closeOnClick: true }}
        >
          <h5 className='center'>Tag List</h5>


          </SideNav>

          <Row>
            {this.state.photos.map((photo) => {
                return (
                  <Photo key={photo.id} photo={photo}/>
                    )
            }) }
        </Row>
      </div>
      )}



  }

}
export default Index
