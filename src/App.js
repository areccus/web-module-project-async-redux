import React from 'react';
import {useEffect} from 'react'
import './App.css';
import {connect} from 'react-redux'
import { animeList } from './action/action';

function App(props) {
  const {quotes} = props
  useEffect(() => {
    props.animeList()
  }, [])
  console.log(quotes)
  return (
    <div className="App">
      <h1>Anime Quotes</h1>
      <img src="https://www.fortressofsolitude.co.za/wp-content/uploads/2019/05/The-15-Most-Powerful-Anime-Characters-Of-All-Time-scaled.jpg" alt="anime characters"/>
      <h2>{quotes.anime}</h2>
      <h3>{quotes.character}</h3>
      <p>{quotes.quote}</p>
    <div className="animeName">
    </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    quotes: state.data
  }
}

export default connect(mapStateToProps, {animeList})(App)