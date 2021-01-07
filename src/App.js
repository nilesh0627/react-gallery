import React,{useState} from 'react'
import './App.css';
import axios from 'axios'
import Searchbar from './components/SearchBar/Searchbar'
import ImageList from './components/imageList/ImageList'
import {access_key} from './unsplashconfig'

function App() {
  const [images,setImages]=useState([])
  const searchImages= async (text)=>{
   const response=await axios.get('https://api.unsplash.com/search/photos',{
      params:{
        query:text
      },
      headers:{
        Authorization:`Client-ID ${access_key}`
      }
    });
    setImages(response.data.results)

  }
  
  return (
    <div className="App">
      <Searchbar onSearchSubmit={searchImages}/>
      <ImageList images={images}/>
    </div>
  );
}

export default App;
