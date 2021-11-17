import React from 'react';
import {
    Image,
    View,
    Text,
    TouchableHighlight
} from 'react-native'


export const BottomContent = ({
    Styles
}) => {

    const welcomeImg = '../../../assets/landing/welcome.png';
    const dev = '../../../assets/landing/MarianoPasini.png'

    return (
        <View style= {Styles.welcomeContainer}>
            <View style= {Styles.welcome}>
                <Image
                    source={require(welcomeImg)}
                    style= {Styles.flexImg}
                />
            </View>
             <View style= {Styles.developer}>
                <Image
                    source={require(dev)}
                    style= {Styles.flexImg}
                />
             </View>
        </View>
    )
}