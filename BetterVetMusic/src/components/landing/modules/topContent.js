import React from 'react';
import { Link } from 'react-router-native';
import {
    Image,
    View,
    Text,
    TouchableHighlight
} from 'react-native'

export const TopContent = ({
    Styles
}) => {

    const logo = '../../../assets/landing/logo.png';
    const discover = '../../../assets/landing/discover.png';
    const smartphone = '../../../assets/landing/smartphone.png';

    return (
        <View style= {Styles.mainContainerTop} >
            <View style= {Styles.topContainer} >
                <View style= {Styles.logoContainer}>
                    <Image
                      source={require(logo)}
                      style= {Styles.flexImg}
                    />
                </View>
                <TouchableHighlight style= {Styles.startContainer}>
                     <Link to='/home'>
                        <Text style= {Styles.start}>
                            Get started now
                        </Text>
                    </Link>
                </TouchableHighlight>
            </View>
            <View style= {Styles.centerContainer} >
                <View style= {Styles.discoverContainer} >
                    <Image
                      source={require(discover)}
                      style= {Styles.flexImg}
                    />
                </View>
                <View style= {Styles.smartphoneContainer} >
                     <Image
                          source={require(smartphone)}
                          style= {Styles.flexImg}
                     />
                </View>
            </View>
        </View>
    )
}