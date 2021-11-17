import { StyleSheet } from 'react-native'


export const Styles = StyleSheet.create({
    mainContainerTop: {
        backgroundColor: '#464660'
    },
    topContainer: {
        flex: 1,
        flexDirection: 'row',
        height: 65,
        alignItems: 'center'
    },
    logoContainer: {
        flex: 1,
    },
    startContainer: {
        flex: 0.7,
        backgroundColor: '#368b85',
        marginLeft: 25,
        marginRight: 25,
        height: '65%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#151515',
    },
    start: {
        color: '#151515',
        fontSize: 15,
        fontWeight: 'bold'
    },
    flexImg: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    },
    centerContainer: {
        flex: 1,
        height: 580
    },
    discoverContainer: {
        width: '95%',
        height: 105,
        marginTop: 30
    },
    smartphoneContainer: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
        marginTop: 25
    },
    welcomeContainer: {
        backgroundColor: '#f1e9e5',
        height: 580
    },
    welcome: {
        width: '100%',
        height: 180,
        marginTop: 45
    },
    developer: {
        height: 250,
        marginTop: 45
    }
})