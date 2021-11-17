import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { CarouselLogic } from '../carousel/';
import { Separator } from '../../../commons/separator';


export const NewReleases = ({
    allAlbums,
    Styles
}) => {

    const [releases, setReleases] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const copyArr = allAlbums.feed.entry.slice();
        const sortedAlbums = copyArr.sort((a,b) =>
            a['im:releaseDate'].label < b['im:releaseDate'].label
        ).slice(0,10)

        setReleases(sortedAlbums)
    }, [])

    return (
        <View>
            <Separator Styles={Styles} name='New releases' />
            <CarouselLogic
                data={releases}
                setActiveIndex={setActiveIndex}
                Styles={Styles}
            />
        </View>
    )
}