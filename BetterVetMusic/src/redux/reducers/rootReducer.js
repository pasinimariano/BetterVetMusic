import { initialState } from './initialState';
import {
    GET_ALL_ALBUMS,
    GET_SONGS,
    DELETE_SONGS,
    GETTER_ERROR,
    SEARCH_ALBUMS,
    SEARCH_BY_CATEGORY
} from '../actions/actionsTypes'


export const rootReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case GET_ALL_ALBUMS:
            return {
                ...state,
                getterError: [],
                allAlbums: action.payload
            }
        case GETTER_ERROR:
            return {
                ...state,
                getterError: action.payload
            }
        case DELETE_SONGS:
            return {
                ...state,
                songsAlbum: []
            }
        case GET_SONGS:
            return {
                ...state,
                songsAlbum: action.payload
            }
        case SEARCH_ALBUMS:
            if (action.payload === '') return {
                ...state,
                albumsSearched: []
            }

            let searchAlbum = state.allAlbums.feed.entry.filter(obj =>
               obj['title'].label.toLowerCase().includes(action.payload.toLowerCase())
            );

            if (searchAlbum.length === 0) {
                searchAlbum = ['There are no albums to show']
            }

            return {
                ...state,
                albumsSearched: searchAlbum
            }
        case SEARCH_BY_CATEGORY:
             let response
             if (state.albumsSearched.length === 0) {
                if(action.payload === 'All') {
                    response = state.allAlbums.feed.entry
                } else if (action.payload === '' || action.payload === 'Select category') {
                    response = state.albumsSearched
                } else {
                    response = state.allAlbums.feed.entry.filter(obj =>
                       obj['category'].attributes.label === action.payload
                    );
                    if (response.length === 0) {
                        response = ['There are no albums to show']
                    }
                }
             } else {
                if(action.payload === 'All') {
                    response = state.albumsSearched
                } else if (action.payload === '' || action.payload === 'Select category') {
                    response = state.albumsSearched
                } else {
                    response = state.albumsSearched.filter(obj =>
                       obj['category'].attributes.label === action.payload
                    );
                    if (response.length === 0) {
                        response = ['There are no albums to show']
                    }
                }
             }

             return {
                ...state,
                albumsSearched: response
             }
        default:
            return state
    }
}