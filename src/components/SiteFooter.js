import React, {Component} from 'react';
import {Footer} from 'react-materialize'

class SiteFooter extends Component {

render() {
  return (
    <div>
    <Footer className="grey" links={
        <div>
        <a className="grey-text text-lighten-3" href="#!">Link 1</a>
        <a className="grey-text text-lighten-3" href="#!">Link 2</a>
        </div>
     }
      >
    </Footer>;
    </div>


  )
}


}

export default SiteFooter
