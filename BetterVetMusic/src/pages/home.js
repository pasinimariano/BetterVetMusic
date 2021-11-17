import React from 'react';
import { connect } from 'react-redux';
import { HomeView } from '../components/home/'
import { Styles } from './styles/homeStyles';


const Home = ({
    allAlbums,
    getterError
}) => {
    return (
        <HomeView
            allAlbums= {allAlbums}
            getterError= {getterError}
            Styles= {Styles}
        />
    )
};

const mapStateToProps = (state) => {
    return {
        allAlbums: state.allAlbums,
        getterError: state.getterError
    }
};

export default connect(
    mapStateToProps,
    null
)(Home)