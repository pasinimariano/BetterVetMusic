import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { CarouselLogic } from '../carousel/';
import { Separator } from '../../../commons/separator';


export const TopTen = ({
    allAlbums,
    Styles
}) => {

    const [top, setTop] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const response = allAlbums.feed.entry.slice(0, 10)
        setTop(response)
    }, [])

    return (
        <View>
            <Separator Styles={Styles} name='Top 10' />
            <CarouselLogic
                data={top}
                setActiveIndex={setActiveIndex}
                Styles={Styles}
            />
        </View>
    )
}