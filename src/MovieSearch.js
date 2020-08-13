import React, { Fragment,Component } from 'react';
import axios from 'axios';
import Header from './Components/Header/Header';
import MovieCard from './Components/Movie-card/Movie-card';
import Search from './Components/Search/Search';
//import Favourites from './Components/Favourites/Favourites';
//import {Switch,Route} from 'react-router-dom';

class MovieSearch extends Component {
    state = {
        movieId: '', // default imdb id (Spartacus)
        title: '',
        movie: {},
        searchResults: [],
        isSearching: false,
       
    }

    componentDidMount() {
        this.loadMovie()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.movieId !== this.state.movieId) {
            this.loadMovie()
        }
        
    }

    loadMovie() {
        axios.get(`http://www.omdbapi.com/?apikey=d207ea3b&i=${this.state.movieId}`)
            .then(response => {
                this.setState({ movie: response.data });
            })
            .catch(error => {
                console.log('Opps!', error.message);
            })
    }

    // we use a timeout to prevent the api request to fire immediately as we type
    timeout = null;

    searchMovie = (event) => {
        this.setState({ title: event.target.value, isSearching: true })

        clearTimeout(this.timeout);

        this.timeout = setTimeout(() => {
            axios.get(`http://www.omdbapi.com/?apikey=d207ea3b&s=${this.state.title}`)
                .then(response => {

                    if (response.data.Search) {
                        const movies = response.data.Search.slice(0, 5);
                        this.setState({ searchResults: movies });
                    }
                })
                .catch(error => {
                    console.log('Opps!', error.message);
                })
        }, 1000)


    }

    // event handler for a search result item that is clicked
    itemClicked = (item) => {
        this.setState(
            {
                movieId: item.imdbID,
                isSearching: false,
                title: item.Title,
            }
        )
    }


    

    render() {
        return (
            <Fragment>
                <Header/>
                
            <div onClick={() => this.setState({ isSearching: false })}>
                
                <Search
                    defaultTitle={this.state.title}
                    search={this.searchMovie}
                    results={this.state.searchResults}
                    clicked={this.itemClicked}
                    searching={this.state.isSearching} />
                {this.state.movieId? <MovieCard movie={this.state.movie} /> : null}
                
                
            </div>
            </Fragment>
        );
    }
}

export default MovieSearch;