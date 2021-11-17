import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {
  Image,
  Text,
  View,
  SafeAreaView,
  TouchableHighlight
} from 'react-native';
import { renderItems } from './renderItems'


export const CarouselLogic = ({
    data,
    setActiveIndex,
    Styles
}) => {
     return (
              <SafeAreaView style={Styles.areaCarousel}>
                <View style={Styles.viewCarousel}>
                    <Carousel
                      layout={"default"}
                      ref={ref => carousel = ref}
                      data={data}
                      sliderWidth={300}
                      itemWidth={300}
                      renderItem={renderItems}
                      onSnapToItem = { index => setActiveIndex(index) } />
                </View>
              </SafeAreaView>
     )
}