require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

// get data of the images
var imageDates = require('../data/imageDatas.json');
//let yeomanImage = require('../images/yeoman.png');

//get URL info from image files path by autoexec function
imageDatas =(function genImageURL(imageDatasArr) {
	for (var i = 0, j = imageDatasArr.Length; i < j; i++) {
		var singleImageData = imageDatasArr[i];

		singleImageData.imageURL = require('../images/' + 
		singleImageData.fileName);

		imageDatasArr[i] = singleImageData;
	}

	return imageDatasArr;
})(imageDates);




class AppComponent extends React.Component {
  render() {
    return (
    	<section className = "stage">
    		<section className = "img-sec">
    		</section>
    		<nav className = "controller-nav">
    		</nav>
    	</section>
      // <div className="index">
      //   <img src={yeomanImage} alt="Yeoman Generator" />
      //   <span>Hello</span>
      //   <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      // </div> 
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
