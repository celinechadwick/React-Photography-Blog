import React, {Component} from 'react';
import axios from 'axios';
import Photo from './Photo';
import PhotoBack from './Photoback';
import PhotoSorted from './PhotoSorted';
import Contact from './Contact';
import {Container, Footer, SideNav, NavItem, Navbar, Button, Icon,Row, Col, Tag, Chip, Tab, Tabs} from 'react-materialize';


var pageStyling={
  padding:'30px',
  color:'red'
}
var gridStyle = {
  height: '120px',
  width: '20%',
  'float': 'left'
}
var chipStyle = {
  align:'center',
  'border-radius': '69px 69px 69px 69px',
'-moz-border-radius': '69px 69px 69px 69px',
'-webkit-border-radius': '69px 69px 69px 69px',
border: '2px dashed #999699',
height: '50px',
width:'250px',
padding:'5px',
margin: '15px auto',
'font-size': '18px'
};

var tagColumnStyle={padding:'20'};
var logoStyle={margin:'auto'};
var tagStyle={margin:'5px'};
var iconStyle={height:'40px'};


class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos:[],
      //photos from the api call
      tags:[],
      //tags from the flickr api call
      searchResult: "",
      //Search param from clicking on a tag

      photosByTag:[],
      //get for photos BY tag. should only be set when the tagSearch method is called by a click on the actual tag
      contactPage:false

    }
  };

componentDidMount() {
  axios
  .get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=128beebe90a24a0b382db91c7e912429&user_id=147813786%40N08&extras=+description%2C+license%2C+date_upload%2C+date_taken%2C+owner_name%2C+icon_server%2C+original_format%2C+last_update%2C+geo%2C+tags%2C+machine_tags%2C+o_dims%2C+views%2C+media%2C+path_alias%2C+url_sq%2C+url_t%2C+url_s%2C+url_q%2C+url_m%2C+url_n%2C+url_z%2C+url_c%2C+url_l%2C+url_o&per_page=500&format=json&nojsoncallback=1`)
  .then((response) => {
    this.setState({
      photos: response.data.photos.photo
    });
    console.log(this.state.photos, "api data", this.state.searchResult);

  })
  .catch((err) => {
    console.log(err, "get not working")
  })

axios
  .get(`https://api.flickr.com/services/rest/?method=flickr.tags.getListUser&api_key=128beebe90a24a0b382db91c7e912429&user_id=147813786%40N08&format=json&nojsoncallback=1`)
  .then((response) => {
    this.setState({
      tags: response.data.who.tags.tag
    });
    console.log(this.state.tags, "api tag data");
  })
  .catch((err) => {
    console.log(err, "tag get not working");
  })

}


tagSearch(e) {
  // if (!this.state.searchResult){
  this.setState({
    searchResult:e.target.textContent
  });
// } else {
//   this.setState({searchResult: this.state.searchResult+"%2C+"+e.target.textContent})
//   console.log("search result is", this.state.searchResult);
// };
//   set search result in state to this tag value and then perform a GET by tag
  axios
  .get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=128beebe90a24a0b382db91c7e912429&user_id=147813786%40N08&tags=${e.target.textContent}&extras=+description%2C+original_format%2C+last_update%2C+geo%2C+tags%2C+o_dims%2C+views%2C+media%2C+url_sq%2C+url_t%2C+url_s%2C+url_q%2C+url_m%2C+url_n%2C+url_z%2C+url_c%2C+url_l%2C+url_o&per_page=500&format=json&nojsoncallback=1`)
  .then((response) => {
    this.setState({
      photos: response.data.photos.photo
    });
    console.log(this.state.photos, "api data", "searchResult:", this.state.searchResult);

  })
  .catch((err) => {
    console.log(err, "get not working", "searchResult:", this.state.searchResult);
  })

}

// How to pass a function in the parent component to the child component:
// <Photo key={photo.id} photo={photo} handleClick={this.handleClick.bind(this)} className='grid-item'/>
likesSearch(e) {
  this.setState({
    contactPage: false
  })
  axios
  .get(`https://api.flickr.com/services/rest/?method=flickr.favorites.getList&api_key=7ac7e9c4dcd56cc74652efb5ce84b53f&user_id=147813786%40N08&extras=+description%2C+license%2C+date_upload%2C+date_taken%2C+owner_name%2C+icon_server%2C+original_format%2C+last_update%2C+geo%2C+tags%2C+machine_tags%2C+o_dims%2C+views%2C+media%2C+path_alias%2C+url_sq%2C+url_t%2C+url_s%2C+url_q%2C+url_m%2C+url_n%2C+url_z%2C+url_c%2C+url_l%2C+url_o&per_page=500&format=json&nojsoncallback=1`)
  .then((response) => {
    this.setState({
      photos: response.data.photos.photo,
    });
    console.log(this.state.photos, "api data", "searchResult:", this.state.searchResult);

  })
  .catch((err) => {
    console.log(err, "get not working", "searchResult:", this.state.searchResult);
  })
}

aboutPage(e) {
  this.setState({
    contactPage: true
  });
};

render() {

    if (!this.state.contactPage) {
      return(
        <div className='pageStyling'>
          <div className="center-align flow-text">
          <h1>Celine Chadwick Photography</h1>
          <div style={{padding:'30px'}}>
            <ul className='tabs'>
          		<li className="tab col s3" onClick={this.likesSearch.bind(this)}><a href="" className='black-text'><h6>Inspiration</h6></a></li>
              <li className="tab col s3" onClick={this.aboutPage.bind(this)}><a href="" className='black-text'><h6>Contact Me</h6></a></li>
            </ul>
          </div>


          <SideNav trigger={<div><Icon small>search</Icon></div>} options={{ closeOnClick: true }}>
            <h5 className='center'>Tag List</h5>
              <div className= "center" style={chipStyle}>
                { this.state.searchResult ? <Chip className="center">{this.state.searchResult}</Chip> : <div>click a tag</div> }
              </div>

              <Row>
                  <Col s={12} style={tagColumnStyle}>
                  {this.state.tags.map((tag) => {
                      return (
                        <div className="chip hoverable" value={tag._content} key={tag._content} onClick={this.tagSearch.bind(this)} style={tagStyle}> {tag._content}</div>
                          )
                  }) }
                  </Col>
              </Row>
            </SideNav>
            </div>
            <Row>
                {this.state.photos.map((photo) => {
                    return (

                      <Photo key={photo.id} photo={photo} />
                        )
                }) }
            </Row>
        </div>
        )
      } else {
      return(
        <div className='pageStyling'>
          <div className="center-align flow-text">
          <h1>Celine Chadwick Photography</h1>
          <div style={{padding:'30px'}}>
            <ul className='tabs'>
              <li className="tab col s3" onClick={this.likesSearch.bind(this)}><a href="" className='black-text'><h6>Inspiration</h6></a></li>
              <li className="tab col s3" onClick={this.aboutPage.bind(this)}><a href="" className='black-text'><h6>Contact Me</h6></a></li>
            </ul>
          </div>
        </div>
          <Contact />
        </div>
      )
    }
  }
}
export default Index
