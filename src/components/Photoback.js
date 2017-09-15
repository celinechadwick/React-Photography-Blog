import React, {Component} from 'react';

class Photoback extends Component {
  constructor(props) {
    super(props);
    }

render() {
  return (
    <div>
      <div>
        {this.props.photo.title}
      </div>
      <div>
        {this.props.photo.description}
      </div>
      <div>
        {this.props.photo.tags}
      </div>
    </div>
  )
}


}


export default Photoback;
