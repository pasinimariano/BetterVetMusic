import React from 'react';
import { ScrollView } from 'react-native';
import { TopTen } from './modules/topTen/';
import { NewReleases } from './modules/newReleases/';
import { Explore } from './modules/explore/';


export const HomeView = ({
    allAlbums,
    getterError,
    Styles
}) => {

    return (
        <ScrollView style={Styles.mainContainer}>
            <TopTen
                allAlbums= {allAlbums}
                Styles= {Styles}
            />
            <NewReleases
                allAlbums= {allAlbums}
                Styles= {Styles}
            />
            <Explore
                allAlbums= {allAlbums}
                Styles= {Styles}
            />
        </ScrollView>
    )
}