import React from 'react';
import { ScrollView } from 'react-native';
import { TopContent } from './modules/topContent';
import { BottomContent } from './modules/botContent';


export const LandingPageView = ({
    Styles
}) => {

    return (
        <ScrollView>
           <TopContent Styles= {Styles}/>
           <BottomContent Styles= {Styles} />
        </ScrollView>
    )
}