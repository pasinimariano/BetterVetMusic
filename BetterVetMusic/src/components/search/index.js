import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Input } from './modules/input';
import { DisplayAlbums } from './modules/displayAlbums';


export const SearchView = ({
    albumsSearched,
    searchAlbum,
    categories,
    searchByCategory,
    Styles
}) => {

    const [text, setText] = useState('');

    return (
        <ScrollView style= {Styles.mainContainer} >
            <Input
                searchAlbum= {searchAlbum}
                text= {text}
                setText= {setText}
                searchByCategory= {searchByCategory}
                categories= {categories}
                Styles= {Styles}
            />
            {
                albumsSearched[0] === 'There are no albums to show'
                ?
                (
                    <View style={Styles.noData}>
                        <Text style= {Styles.pickerItem} > {albumsSearched[0]} </Text>
                    </View>
                )
                :
                (
                    <DisplayAlbums
                        albumsSearched= {albumsSearched}
                        text= {text}
                        Styles= {Styles}
                    />
                )
            }
        </ScrollView>
    )
}