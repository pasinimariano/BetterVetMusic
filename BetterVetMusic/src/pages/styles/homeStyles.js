import { StyleSheet } from 'react-native'


export const Styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#f1e9e5'
    },
    separatorContainer: {
        height: 30,
        width: '100%'
    },
    nameSeparator: {
        width: '90%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 15,
    },
    textSeparator: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#151515'
    },
    textAll: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#b4b897'
    },
    separator: {
        borderBottomColor: '#151515',
        borderBottomWidth: 1,
        width: '90%'
    },
    areaCarousel: {
        flex: 1,
        paddingTop: 30,
        marginLeft: 15,
        marginBottom: 50
    },
    viewCarousel: {
        flex: 1,
        flexDirection:'row',
        justifyContent: 'center'
    },
    cardContainer: {
        marginLeft: 40,
        marginTop: 25,
    },
    carouselImg: {
        width: 300,
        height: 300
    },
    dataContainer: {
        height: 100,
        marginTop: 5
    },
    moreInfo: {
        marginTop: 10,
        height: 40,
        width: '90%',
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    highLight: {
        backgroundColor: '#368b85',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#151515'
    },
    informationContainer: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 10
    },
    information: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#151515',
    }
})