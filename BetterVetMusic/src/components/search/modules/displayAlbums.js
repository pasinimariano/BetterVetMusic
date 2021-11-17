import React from 'react';
import { View, Text, Image } from 'react-native';
import { Separator } from '../../commons/separator';
import { MapData } from '../../commons/mapData';


export const DisplayAlbums = ({
    albumsSearched,
    text,
    Styles
}) => {

    return (
        <View>
            <Text style= {Styles.title} >
                {`Search results for ${text}`}
            </Text>
            <Separator
                name= 'Albums'
            />
            <View>
                <MapData
                    data= {albumsSearched}
                />
            </View>
        </View>
    )
}