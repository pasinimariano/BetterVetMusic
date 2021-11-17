import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { SearchView } from '../components/search/';
import { searchAlbum, searchByCategory } from '../redux/actions/actionCreator';
import { Styles } from './styles/searchStyles';


const Search = ({
    allAlbums,
    albumsSearched,
    searchAlbum,
    searchByCategory
}) => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const array = allAlbums.feed.entry.map(obj =>
            obj['category'].attributes.label
        );
        const uniques = [...new Set(array)]


        setCategories(uniques)
    }, [])

    return (
        <SearchView
            albumsSearched= {albumsSearched}
            searchAlbum= {searchAlbum}
            categories= {categories}
            searchByCategory= {searchByCategory}
            Styles= {Styles}
        />
    )
};

const mapStateToProps = (state) => {
    return {
        allAlbums: state.allAlbums,
        albumsSearched: state.albumsSearched
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        searchAlbum: (data) => dispatch(searchAlbum(data)),
        searchByCategory: (cat) => dispatch(searchByCategory(cat))
    }
};

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(Search);