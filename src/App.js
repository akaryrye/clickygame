import React, {Component} from 'react';
import Header from './components/header/header'
import Footer from './components/footer/footer';
import Image from './components/image/image';
import imagesJSON from './images.json';
import './styles.css';

class App extends Component {
  
  state = {
    images: imagesJSON,
    score: 0,
    topScore: 0
  }

  // shuffle images on page load
  componentDidMount() {
    this.shuffleImages(this.state.images);
  }

  // algorith for shuffling image array
  shuffleImages(imgArr) {
    for (let i = imgArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [imgArr[i], imgArr[j]] = [imgArr[j], imgArr[i]];
    }
    this.setState({images: imgArr});
  }

  resetGame = () => {
    let imgArr = this.state.images;
    // set clicked to false on all
    imgArr.map(img => img.clicked = false);
    
    if (this.state.score === imgArr.length) { alert("Great Job, You did it !!!")} 
    else { alert("Ya done fucked it up")}
    
    this.setState({ images: imgArr, score: 0 });
  }

  updateScore = () => {
    let currentScore = this.state.score + 1;
    let topScore = this.state.topScore;
    
    if (currentScore > topScore) {
      this.setState({topScore: currentScore, score: currentScore})}
    else {this.setState({score: currentScore})}
    
    console.log("score: " + currentScore);

    if (currentScore === this.state.images.length) {
      this.resetGame()
    } 
  }

  // When an image is clicked, add its id to clicked array
  handleImageClick = imageId => {
    let tempImages = this.state.images;
    let imageKey;

    // find index of selected image by id
    tempImages.forEach( (image, index) => {
      if (image.id === imageId) {imageKey = index}
    });

    // if image had already been clicked or not:
    if (tempImages[imageKey].clicked === false) {
      tempImages[imageKey].clicked = true;
      this.updateScore();
    } else {
      this.resetGame();
    }
    console.log("Index: " + imageKey);
    console.log("arr length: " + tempImages.length);
    
    /* if (this.state.score === tempImages.length) {
      this.resetGame(); */
    this.shuffleImages(tempImages);
  };


  render() {
    return (
      <div className="App">
        <Header score={this.state.score}
                topScore={this.state.topScore} />
        <div id="game-board">
        {this.state.images.map( image => (
          <Image  key={image.id}
                  id={image.id}
                  name={image.name}
                  img={image.img}
                  onClick={this.handleImageClick} />
        ))}
        </div>
        <Footer />
      </div>
    );
  }
  
}

export default App;  //
