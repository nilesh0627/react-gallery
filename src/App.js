import React,{useState} from 'react'
import './App.css';
import unsplash from './components/api/unsplash'
import Searchbar from './components/SearchBar/Searchbar'
import ImageList from './components/imageList/ImageList'
import OptionList from './components/optionList/optionList'
import Pagination from './components/pagination/Pagination'

function App() {
  const [images,setImages]=useState([])
  const [pages,setPages]=useState(0)
  const [text,setText]=useState('sun')
  const searchImages= async (text,page=1)=>{
        setText(text)
        const response=await unsplash.get('search/photos',{
          params:{
            query:text,
            per_page:20,
            page:page
          }
        })
        console.log(response)
        setImages(response.data.results)
        setPages(response.data.total_pages)
        window.scrollTo(0,0)
  }
  
  return (
    <div className="App">
      <Searchbar onSearchSubmit={searchImages} />
      <OptionList onSearchSubmit={searchImages} />
      <ImageList images={images}/>
      <Pagination pages={pages} text={text} onSearchSubmit={searchImages}/>
    </div>
  );
}

export default App;
