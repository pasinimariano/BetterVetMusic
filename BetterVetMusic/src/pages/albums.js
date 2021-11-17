import React from 'react';
import { connect } from 'react-redux';
import { AlbumsView } from '../components/albums';
import { Styles } from './styles/albumsStyles'


const Albums = ({
    allAlbums
}) => {
    return (
        <AlbumsView
            allAlbums= {allAlbums}
            Styles= {Styles}
        />
    )
};

const mapStateToProps = (state) => {
    return {
        allAlbums: state.allAlbums
    }
}

export default connect(
    mapStateToProps,
    null
)(Albums)