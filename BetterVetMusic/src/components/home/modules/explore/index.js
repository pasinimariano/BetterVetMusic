import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { CarouselLogic } from '../carousel/';
import { Separator } from '../../../commons/separator';


export const Explore = ({
    allAlbums,
    Styles
}) => {

    const [explore, setExplore] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const randomAlbums = [];

        while (randomAlbums.length < 10) {
            let random = Math.floor(Math.random() * allAlbums.feed.entry.length);

            randomAlbums.push(allAlbums.feed.entry[random])
        }

        setExplore(randomAlbums)
    }, [])

    return (
        <View>
            <Separator Styles={Styles} name='Explore new trends' />
            <CarouselLogic
                data={explore}
                setActiveIndex={setActiveIndex}
                Styles={Styles}
            />
        </View>
    )
}