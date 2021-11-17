import React from 'react';
import { TouchableHighlight, Text } from 'react-native';


export const Button = ({
    press,
    text,
    wordState,
    Styles
}) => {
    return (
         <TouchableHighlight
            onPress = {() => press()}
            style= {[text !== wordState ? Styles.wordSelector : Styles.selection]}
         >
             <Text style= {Styles.wordSelected} >
                {text}
             </Text>
         </TouchableHighlight>
    )
}