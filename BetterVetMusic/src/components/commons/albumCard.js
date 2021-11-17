import React, { useState } from 'react';
import {
    View,
    Image,
    Text,
    TouchableHighlight,
    Linking
} from 'react-native';
import { Styles } from '../../pages/styles/homeStyles';
import ModalDetails from './modalDetails';


export const AlbumCard = ({
    id,
    img,
    artist,
    title,
    category,
    url,
    release,
    price
}) => {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style= {Styles.cardContainer} >
            <View>
                <Image
                    style={Styles.carouselImg}
                    source={{ uri: img }}
                />
            </View>
            <View style={Styles.dataContainer}>
                <Text style={Styles.textSeparator}> {artist} </Text>
                <Text style={Styles.textSeparator}> {title} </Text>
                <Text style={Styles.textAll}> {category} </Text>
            </View>
            <View style={Styles.separator} />
            <View style={Styles.moreInfo}>
                <TouchableHighlight
                    style={Styles.highLight}
                    onPress={() => Linking.openURL(url)}
                >
                    <Text style={Styles.textSeparator}>
                        Get it!
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style= {Styles.informationContainer}
                    onPress= {() => setModalVisible(true)}
                >
                    <Text style={Styles.information}>
                        or get more info
                    </Text>
                </TouchableHighlight>
            </View>
            <ModalDetails
                modalVisible= {modalVisible}
                setModalVisible= {setModalVisible}
                id= {id}
                img= {img}
                artist= {artist}
                title= {title}
                category= {category}
                url= {url}
                release= {release}
                price= {price}
            />
        </View>
    )
}