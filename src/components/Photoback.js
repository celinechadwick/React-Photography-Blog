import React, {Component} from 'react';

class Photoback extends Component {
  constructor(props) {
    super(props);
    }

render() {
  return (
    <div onClick={()=>this.props.handleSwitchFront()}>
      <div>
        title: {this.props.photo.title}
      </div>
      <div>
        content: {this.props.photo.description.content}
      </div>
      <div>
        tags: {this.props.photo.tags}
      </div>
    </div>
  )
}


}


export default Photoback;
