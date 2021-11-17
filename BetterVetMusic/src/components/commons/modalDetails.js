import React, { useEffect } from "react";
import { connect } from 'react-redux';
import {
    Modal,
    Text,
    TouchableHighlight,
    ScrollView,
    View,
    Linking,
    Image
} from "react-native";
import { Button } from './button';
import { getSongs, deleteSongs} from '../../redux/actions/actionCreator';
import { AlbumSongs } from './albumSongs';
import { Styles } from './styles/modalStyles';


const ModalDetails = ({
    id,
    modalVisible,
    setModalVisible,
    img,
    artist,
    title,
    category,
    url,
    release,
    price,
    deleteSongs,
    getSongs,
    songsAlbum
}) => {

  useEffect(() => {
    if (!modalVisible) {
        deleteSongs()
    } else {
        deleteSongs()
        getSongs(id)
    }
  }, [modalVisible])

  return (
    <View style= {Styles.mainContainer}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <ScrollView>
            <View style= {Styles.mainContainer}>
              <View style= {Styles.modalView} >
                   <Button
                        press= {() => setModalVisible(!modalVisible)}
                        text = 'X'
                        Styles= {Styles}
                        wordState= 'X'
                   />
                   <View style={Styles.titleContainer}>
                      <Text style={Styles.wordSelected}> {artist} </Text>
                      <Text style={Styles.wordSelected}> {title} </Text>
                      <Text style={Styles.category}> {category} </Text>
                      <Button
                          press= {() => Linking.openURL(url)}
                          text = 'Must hear album!'
                          Styles= {Styles}
                      />
                   </View>
                   <View style= {Styles.imgContainer}>
                       <Image
                           style= {Styles.albumImg}
                           source= {{ uri: img }}
                       />
                   </View>
                   <Text style={Styles.release}>
                       {`Release on ${release}`}
                   </Text>
                   <Text style={Styles.price}>
                       {`${price.currency} ${price.amount}`}
                   </Text>
                   <AlbumSongs
                       album= {songsAlbum}
                       Styles= {Styles}
                   />
              </View>
            </View>
        </ScrollView>
      </Modal>
    </View>
  );
};

const mapStateToProps = (state) => {
    return {
        songsAlbum: state.songsAlbum
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getSongs: (id) => dispatch(getSongs(id)),
        deleteSongs: () => dispatch(deleteSongs())
    }
};

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(ModalDetails);