
import './App.css';

import React, { useState } from 'react';
const App = () => {
  const [getImages, setGetImages] = useState()
  function getPhotos(images) {
    images.map(image => {
      setGetImages(image)
      console.log(getImages)
    })
 }
 fetch("https://api.pexels.com/v1/search?query=people",{
   headers: {
     Authorization: "563492ad6f917000010000017cc53e814cb84a32809bee6cbd3f58ff"
   }
 })
    .then(resp => {
      return resp.json()
    })
    .then(data => {
      getPhotos(data.photos);
    })
  
  return(
    <div>
  <h1>teste</h1>
    </div>
  );
};

export default App;