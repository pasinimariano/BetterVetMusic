import React from 'react';
import { Text, View } from 'react-native';
import { Styles } from './styles/separatorStyles';


export const Separator = ({
    name
}) => {
    return (
        <View style={Styles.separatorContainer}>
            <View style={Styles.nameSeparator}>
                <Text style={Styles.textSeparator}> {name} </Text>
            </View>
            <View style={Styles.separator} />
        </View>
    )
}