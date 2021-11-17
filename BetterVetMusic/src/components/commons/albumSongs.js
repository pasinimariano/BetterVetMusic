import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';


export const AlbumSongs = ({
    album,
    Styles
}) => {

    const [songs, setSongs] = useState([])

    useEffect(() => {
        if (album.length !== 0) {
            const slicedSongs= album.results.slice(1, -1);
            const filteredSongs= slicedSongs.map(obj => obj['trackCensoredName'])

            setSongs(filteredSongs)
        }
    }, [album])

    return (
        <View>
            {
                songs.length === 0
                ? <Text> Loading songs...</Text>
                :
                (
                    songs.map((song, index)=> {
                        return (
                            <Text
                                key= {index}
                                style= {Styles.release}
                            >
                                {`${index + 1}.  ${song}`}
                            </Text>
                        )
                    })
                )
            }
        </View>
    )
};