import React, { useState, useEffect } from 'react';
import {
    View,
    ScrollView,
    Text
} from 'react-native';
import { Alphabet } from './modules/alphabet';
import { Separator } from '../commons/separator';
import { MapData } from '../commons/mapData';


export const AlbumsView = ({
    allAlbums,
    Styles
}) => {

    const [word, setWord] = useState('A');
    const [showing, setShowing] = useState([]);

    useEffect(() => {
        const response = allAlbums.feed.entry.filter(obj =>
            obj['im:name'].label[0].toUpperCase() === word
        )

        setShowing(response)
    }, [word])

    return (
    <ScrollView style= {Styles.mainContainer} >
        <Alphabet
            wordState= {word}
            setWord= {setWord}
            Styles= {Styles}
        />
        <Separator
            name= {`Albums start with ${word}`}
        />
        {
            showing.length !== 0
            ? <MapData data= {showing} />
            : <Text style= {Styles.noData}> {`Sorry we don´t have albums on our top with ${word}`} </Text>
        }
    </ScrollView>
    )
}