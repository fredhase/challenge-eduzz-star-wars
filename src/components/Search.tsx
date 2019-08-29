import React from 'react';
import * as ReactRedux from 'react-redux';

import { getMovies, searchMovies } from '../redux/reducers/moviesReducer';
import { IAppState } from '../redux/configureStore';

import "../style/css/Header.css";

class Search extends React.Component<any, any>{
    state = {
        movieToSearch: "",
    }

    inputHandler = (event: any) => {
        this.setState({movieToSearch: event.target.value})
    }
    
    searchForMovie = (search: string) => {
        this.props.dispatchSearchMovies(search);
    }

    render(){
        return(
            <div className="search-bar">
                    <input type="text" placeholder="Search movies by title!"
                    onChange={this.inputHandler}/>
                    <button className="search-btn"
                    onClick={() => this.searchForMovie(this.state.movieToSearch)}> 
                        Search!
                    </button>
                    <button className="home-btn"
                    onClick={this.props.dispatchGoHome}>
                        Home (Show all movies)
                    </button>
            </div>);
    }
}

const mapStateToProps = (state: IAppState) => {
    return({
        moviesReducer: state.moviesReducer,
    })
}

const mapDispatchToProps = {
    dispatchSearchMovies: searchMovies,
    dispatchGoHome: getMovies,
}

const connect = ReactRedux.connect(mapStateToProps, mapDispatchToProps);
export default connect(Search);