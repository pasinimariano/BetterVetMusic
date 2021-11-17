import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native'
import { withRouter } from 'react-router';
import { NavigationContainer } from '@react-navigation/native';
import LandingPage from './pages/landing';
import { NavBar } from './components/navBar/';
import { Styles } from './mainStyle'

const Root = (props) => {
    const [path, setPath] = useState();
    const logo = './assets/landing/logo.png';

    useEffect(() => {
        setPath(props.location.pathname)
    }, [props.location.pathname])

    return (
        <>
            {
                path !== '/'
                ?
                (
                    <NavigationContainer>
                        <View style={Styles.logoContainer}>
                            <Image
                              style={Styles.flexImg}
                              source={require(logo)}
                            />
                        </View>
                        <NavBar />
                    </NavigationContainer>
                )
                : <LandingPage />
            }
        </>
    )
};

export default withRouter(Root);