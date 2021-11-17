import React, { useState, useEffect } from 'react';
import {
    TextInput,
    Text,
    View
} from 'react-native';
import { PickerView } from './picker';


export const Input = ({
    searchAlbum,
    text,
    setText,
    searchByCategory,
    categories,
    Styles
}) => {

    const [category, setCategory] = useState('');

    const cleanSearch = () => {
        setText('')
        setCategory('Select category')
    }

    useEffect (() => {
        searchAlbum(text)
        searchByCategory(category)
    }, [text, category])

    return (
        <View>
            <View style= {Styles.inputContainer} >
                <TextInput
                    style= {Styles.input}
                    onChangeText= {setText}
                    value= {text}
                />
                <Text
                    onPress={() => cleanSearch()}
                    style= {Styles.pickerItem}
                >
                    X
                </Text>
            </View>
            <PickerView
                text= {text}
                categories= {categories}
                setCategory= {setCategory}
                category= {category}
                searchByCategory= {searchByCategory}
                Styles= {Styles}
            />
        </View>
    )
}