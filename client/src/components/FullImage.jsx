import React from 'react';

class FullImage extends React.Component {

  constructor(props) {
    super (props);
    // {id, src, fullHover, clickIt, className}

    this.state = {
      backgroundPosition: '0% 0%'
    }
  }

  hoverZoom(event) {
    //hover over the image to show zoom
    const { left, top, width, height } = event.target.getBoundingClientRect();
    const x = (event.pageX - left) / width * 100;
    const y = (event.pageY - top) / height * 100;

    this.setState({
      backgroundPosition: `${x} ${y}`
    })

  }

  render() {
    return (
      <figure onMouseMove={this.hoverZoom} style={this.state}>
        <img 
          id={this.props.id}
          className={this.props.className}
          src={this.props.src}
          onMouseEnter={this.props.fullHover}
          onMouseLeave={this.props.fullHover}
          onClick={this.props.clickIt}
        />
      </figure>
    );
  }
};

export default FullImage;
