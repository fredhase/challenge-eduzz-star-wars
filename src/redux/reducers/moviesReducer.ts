import { Dispatch } from 'redux';

const INITIAL_STATE = {
    movies: [],
    opening: '',
    loading: false,
    shown: false,
    home: true,
}

export default function moviesReducer(state = INITIAL_STATE, action: any){
    switch(action.type){
        case 'GET_MOVIES':
            return({
                ...state,
                movies: INITIAL_STATE.movies,
                home: false,
                loading: true,
            });
        
        case 'GET_MOVIES_SUCCESS':
            return({
                ...state,
                loading: false,
                home: false,
                movies: action.payload.movies,
            });

        case 'SEARCHING_MOVIES':
            return({
                ...state,
                loading: true,
                home: false,
            });
        
        case 'SEARCH_MOVIES_SUCCESS':
            return({
                ...state,
                loading: false,
                home: false,
                movies: action.payload.movies,
            });

        default: 
            return state;
    }
}

export function getMovies(){
    return async function(dispatch: Dispatch) {
        dispatch({
        type: 'GET_MOVIES',
        payload: {}
        });

        const response = await fetch("https://swapi.co/api/films/");
        const results = await response.json();
        let allMovies = results.results;

        dispatch({
            type: 'GET_MOVIES_SUCCESS',
            payload: {
                movies: allMovies,
            }
        });
    }
}

export function searchMovies(search: string){
    return async function(dispatch: Dispatch){ 
        dispatch({
            type: 'SEARCHING_MOVIES',
            payload: {},
        });

        const reponse = await fetch("https://swapi.co/api/films/?search="+search);
        const results = await reponse.json();
        const foundMovies = results.results;

        dispatch({
            type: 'SEARCH_MOVIES_SUCCESS',
            payload: {
                movies: foundMovies,
            }
        });
    }
}