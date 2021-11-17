import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { LandingPageView } from '../components/landing/';
import { getAllAlbums } from '../redux/actions/actionCreator';
import { Styles } from './styles/landingStyles';


const LandingPage = ({
    getAllAlbums
}) => {

    useEffect(() => {
        getAllAlbums()
    }, [getAllAlbums])

    return (
        <LandingPageView
            Styles= {Styles}
        />
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllAlbums: () => dispatch(getAllAlbums())
    }
};

export default connect(
    null,
    mapDispatchToProps
)(LandingPage)