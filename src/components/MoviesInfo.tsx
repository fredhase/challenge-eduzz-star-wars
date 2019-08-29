import React from 'react';
import * as ReactRedux from 'react-redux';

import OpeningButton from './OpeningBtn';
import { getMovies } from '../redux/reducers/moviesReducer';
import { IAppState } from '../redux/configureStore';

import '../style/css/MovieInfo.css'


class MoviesInfo extends React.Component<any, any>{
    componentDidMount() {
        if(this.props.moviesReducer.home){
            this.props.dispatchGetMovies();
        }
    }

    render(){
        if (this.props.moviesReducer.loading){
            return(
                <div className="main-box">
                    <div className="loading-info">
                        <p>LOADING</p>
                    </div>
                </div>
            );   
        }
        return(
                <div className="main-box">
                {this.props.moviesReducer.movies.map((film: any) => {
                    let movie = {...film, shown: false}
                    return (
                        <div key={movie.episode_id} className="movie-box">
                            <div className="movie-element">
                                <h3>Title: </h3>
                                <h5 style={{color: "white"}}>{movie.title}</h5>
                            </div>
                            <div className="movie-element">
                                <h4>Episode: </h4>
                                <p>{movie.episode_id}</p>
                            </div>
                            <div className="movie-element">
                                <h4>Release Date: </h4>
                                <p>{movie.release_date}</p>
                            </div>
                            <div className="movie-element">
                                <h4>Director: </h4>
                                <p>{movie.director}</p>
                            </div>
                            <div className="movie-element">
                                <h4>Producer: </h4>
                                <p>{movie.producer}</p>
                            </div>
                            <OpeningButton opening={movie.opening_crawl} shown={movie.shown}/>
                        </div>
                    );
                })}
                </div>
        );
    }
}

const mapStateToProps = (state: IAppState) => {
    return({
        moviesReducer: state.moviesReducer,
    })
}

const mapDispatchToProps = {
    dispatchGetMovies: getMovies,
}

const connect = ReactRedux.connect(mapStateToProps, mapDispatchToProps);
export default connect(MoviesInfo);