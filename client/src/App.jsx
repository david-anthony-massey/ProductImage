import React from 'react';
import axios from 'axios';
import data from './CanadianAPISorryEh.js';
import Image from './components/Image.jsx';
import PopUpGallery from './components/PopUpGallery.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      currentPhoto: '',
      productUrls: [],
      productId: 2,
      hover: false,
      hoverMain: false,
      showPopUp: false
    }

    this.hoverChoose = this.hoverChoose.bind(this);
    this.fullHover = this.fullHover.bind(this);
    this.clickIt = this.clickIt.bind(this);
  }

  componentDidMount() {
    //get request for the photo
    axios.get('http://localhost:3000/images', this.state.productId)
    .then((response) => {
      this.setState({
        currentPhoto: response.data.imgUrl
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

  fullHover(event) {
    //onHover change text beneath full image
    event.preventDefault();
    this.setState({
      hoverMain: !this.state.hoverMain
    })
  }

  clickIt(event) {
    //onclick open gallery view
    event.preventDefault();
    this.setState({
      showPopUp: !this.state.showPopUp
    })
  }

  hoverZoom(event) {
    //onHover zoom into image
  }

  //commented out, posts data from CanadianAPI into my database
  // postIt() {
  //   // console.log('data: ', data);
  //   for (var i = 0; i < data.length; i++) {
  //     for (var j = 0; j < data[i].imgUrls.length; j++) {
  //         var obj = {
  //           productId: data[i].productId,
  //           imgUrls: data[i].imgUrls[j].toString()
  //         }

  //       axios.post('http://localhost:3000/images', obj)
  //       .then((response) => {
  //         console.log('post response:', response);
  //       })
  //       .catch((err) => { console.error('cant post wont post'); })
  //     }
  //   }
  // }

  render() {
    return (
      <div>
        <div className="prodImg">
          <Image 
            images={data[this.state.productId]} 
            id={this.state.productId}
            currentPhoto={this.state.currentPhoto}
            hoverChoose={this.hoverChoose}
            hover={this.state.hover}
            hoverMain={this.state.hoverMain}
            fullHover={this.fullHover}
            clickIt={this.clickIt}
            />
          {
            this.state.showPopUp ? 
            <PopUpGallery 
              images={data[this.state.productId]}
              id={this.state.productId}
              currentPhoto={this.state.currentPhoto}
              />
            : null
          }
        </div>
    </div>
    );
  }
};

export default App;