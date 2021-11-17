import axios from 'axios';
import {
    GET_ALL_ALBUMS,
    GET_SONGS,
    DELETE_SONGS,
    GETTER_ERROR,
    SEARCH_ALBUMS,
    SEARCH_BY_CATEGORY
} from './actionsTypes';


export const getAllAlbums = () => {
    return (dispatch) => {
        return axios
                    .get('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
                    .then(json => {
                        dispatch({
                            type: GET_ALL_ALBUMS,
                            payload: json.data
                        })
                    })
                    .catch(error => {
                        dispatch({
                            type: GETTER_ERROR,
                            payload: error
                        })
                    })
    }
};

export const getSongs = (id) => {
    return (dispatch) => {
        return axios
                    .get(`https://itunes.apple.com/lookup?id=${id}&entity=song`)
                    .then(json => {
                        dispatch({
                            type: GET_SONGS,
                            payload: json.data
                        })
                    })
                     .catch(error => {
                        dispatch({
                            type: GETTER_ERROR,
                            payload: error
                        })
                     })
        }
};

export const deleteSongs = () => {
    return {
        type: DELETE_SONGS
    }
}

export const searchAlbum = (data) => {
    return {
        type: SEARCH_ALBUMS,
        payload: data
    }
};

export const searchByCategory = (category) => {
    return {
        type: SEARCH_BY_CATEGORY,
        payload: category
    }
};