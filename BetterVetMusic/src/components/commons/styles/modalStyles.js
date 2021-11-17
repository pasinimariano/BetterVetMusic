import { StyleSheet } from 'react-native'


export const Styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: '#f1e9e5',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
        width: '80%',
        height: 2
        },
        borderWidth: 2,
        borderColor: '#151515',
    },
    selection: {
        height: 40,
        width: 300,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    wordSelector: {
        backgroundColor: '#368b85',
        height: '40%',
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#151515',
        marginTop: 8,
    },
    wordSelected: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#151515'
    },
    category: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#368b85'
    },
    titleContainer: {
        width: 300,
        height: 150
    },
    imgContainer: {
        marginTop: 50,
        marginBottom: 10
    },
    albumImg: {
        height: 280,
        width: 280
    },
    release: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 5
    },
    price: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#368b85',
        marginBottom: 15
    }
})