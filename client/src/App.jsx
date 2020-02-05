import React from 'react';
import axios from 'axios';
// import data from './CanadianAPISorryEh.js';
import Image from './components/Image.jsx';
import PopUpGallery from './components/PopUpGallery.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      currentPhoto: '',
      productUrls: [],
      productId: 3,
      productName: '',
      hover: false,
      hoverMain: false,
      showPopUp: false
    }

    this.hoverChoose = this.hoverChoose.bind(this);
    this.fullHover = this.fullHover.bind(this);
    this.togglePopUp = this.togglePopUp.bind(this);
    this.clickChoose = this.clickChoose.bind(this);
  }

  componentDidMount() {
    //get request for the photo
    axios.get('/getImages', {
      params: 
      {productId: this.state.productId}
    })
    .then((response) => {
      // console.log('get images-->', response.data)
      response.data.map( (url) => {
        this.setState({
          productUrls: [...this.state.productUrls, url.imgUrl],
          productName:url.productName
        })
      });
      
      this.setState({
        currentPhoto: this.state.productUrls[0],
      })
    })
    .catch((err) => {console.error('no soup for you')});
  }

  hoverChoose(event) {
    //onHover choose current image to show
    event.preventDefault();
    this.setState({
      currentPhoto: event.target.src,
      hover: !this.state.hover
    })
  }

  clickChoose(event) {
    //onClick choose current image to show
    event.preventDefault();
    this.setState({
      currentPhoto: event.target.src
    })
  }

  fullHover(event) {
    //onHover change text beneath full image
    event.preventDefault();
    this.setState({
      hoverMain: !this.state.hoverMain
    })
  }

  togglePopUp(event) {
    //onclick open gallery view
    event.preventDefault();
    this.setState({
      showPopUp: !this.state.showPopUp
    })
  }

  hoverZoom(event) {
    //onHover zoom into image
  }

  render() {
    return (
      <div>
        <div className="tay-prodImg">
          <Image 
            images={this.state.productUrls} 
            id={this.state.productId}
            currentPhoto={this.state.currentPhoto}
            hoverChoose={this.hoverChoose}
            hover={this.state.hover}
            hoverMain={this.state.hoverMain}
            fullHover={this.fullHover}
            togglePopUp={this.togglePopUp}
            />
          {
            this.state.showPopUp ? 
            <PopUpGallery 
              images={this.state.productUrls}
              id={this.state.productId}
              currentPhoto={this.state.currentPhoto}
              togglePopUp={this.togglePopUp}
              prodName={this.state.productName}
              clickChoose={this.clickChoose}
              />
            : null
          }
        </div>
    </div>
    );
  }
};

export default App;