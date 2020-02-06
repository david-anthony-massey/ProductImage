import React from 'react';

class FullImage extends React.Component {

  constructor(props) {
    super (props);
    // {id, src, fullHover, clickIt, className}
    this.state = {
      url: '',
      position: '0% 0%'
    }
  }

  componentDidMount() {
    //set state url
    this.setState({
      url: this.props.src
    })
  }

  hoverZoom() {
    //hover over the image to show zoom

  }

  render() {
    return (
      <figure>
        <img 
          id={this.props.id}
          className={this.props.className} 
          src={this.state.url} 
          onMouseEnter={this.props.fullHover}
          onMouseLeave={this.props.fullHover}
          onClick={this.props.clickIt}
          />
      </figure>
    );
  }
};

export default FullImage;
