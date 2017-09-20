import React, {Component} from 'react';
import {SideNav, SideNavItem, Navbar, Button, Icon, Row, Input, Chip, Col, Tag} from 'react-materialize';
import axios from 'axios';

class Nav extends Component {

  handleChange(event) {
    console.log(event.target.name, event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  // {this.state.searchResult ? <Photo key={this.state.searchResult.id} photo={this.state.searchResult} /> : ""}
  handleSubmit(event) {
    event.preventdefault();
    axios.get()
    //Either search by tag OR use the object given back to search
    //If it is in the object, write a function that will take matching tags
    //and render them
  }

  render() {
    return (
    <div>
    <Navbar brand='Celine Chadwick Photography' fixed className='grey lighten-6'> </Navbar>

      <SideNav
      trigger={<Button floating large className='red show-on-large' waves='light' icon='add' />}
    	options={{ closeOnClick: true }}
    	>
    	<h5 className='center'>Tag List</h5>
        <Row onSubmit={this.handleSubmit.bind(this)}>
        	<Input s={6} label="Search by tag" onChange={this.handleChange.bind(this)}> <Icon>account_circle</Icon></Input>
        </Row>

        <Row>
        	<Col s={12}>
            <Tag>tag example</Tag>
        		<Tag>tag placeholder</Tag>
        	</Col>
        </Row>
    </SideNav>

  </div>
  )

}

}
export default Nav;
