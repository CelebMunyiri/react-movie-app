import {useState, useEffect} from "react";
import './App.css'
import searchIcon from './search.svg'
import MovieCard from "./MovieCard";
const API_URL='https://www.omdpapi.com/?api_key=1788a673'
//a414f70a
/*const movie1={
    'Title':'Amazing Spiderman Syndrome',
    'Year':'2012',
    'imdbID':'tt2586634',
    'Type':'movie',
    'Poster':'N/A'
}*/

const App=()=>{
    const [movies,setMovies]=useState([])
    const [searchTerm, setSearchTerm]=useState('')
    const searchMovies=async(title)=>{
const response=await fetch(`${API_URL}$s=${title}`);


const data=await response.json();
setMovies(data.Search);
//console.log(data.Search);
    }
    useEffect(()=>{
searchMovies({searchTerm});
    },);
    return(
        <div className="App">
            <h1>CELEBMunyiri MOVIES</h1>
        <div className="search">
            <input
            placeholder="Search for movies"
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
            
            />
            <img
            src={searchIcon}
            alt="search"
            onClick={()=>searchMovies('')}

            />
            </div>
{
    movies?.length >0
    ? (
    <div className="container">
    {movies.map((movie)=>(
    <MovieCard movie={movie}/>
 ))}
  </div>) :
 (
 <div className="empty">
  <h2>No movies found</h2>
</div>
 )
}

           
</div>
    );
}
export default App