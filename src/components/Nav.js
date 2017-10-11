import React, {Component} from 'react';
import {SideNav, NavItem, Navbar, Button, Row, Col, Tag} from 'react-materialize';
import axios from 'axios';

class Nav extends Component {

//Maybe add the tag

  tagSearch(event) {
    //Search for tags matching
  }

  render() {
    return (
    <div>
      <SideNav
      trigger={<Button floating large className='red show-on-large' waves='light' icon='add' />}
    	options={{ closeOnClick: true }}
    	>
    	<h5 className='center'>Tag List</h5>
        <Row>
        	<Col s={12}>
            <Tag onClick={this.tagSearch.bind(this)}>tag example</Tag>
        		<Tag>tag placeholder</Tag>
        	</Col>
        </Row>
    </SideNav>

  </div>
  )

}

}
export default Nav;
