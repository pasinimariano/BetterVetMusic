import { StyleSheet } from 'react-native'


export const Styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#f1e9e5'
    },
    alphabetContainer: {
        flex: 0,
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: 10,
        justifyContent: 'center'
    },
    wordSelector: {
        marginLeft: 10,
        marginTop: 10,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#151515',
    },
    selection: {
        backgroundColor: '#368b85',
        marginLeft: 10,
        marginTop: 10,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#151515',
    },
    wordSelected: {
        color: '#151515',
        fontWeight: 'bold',
        fontSize: 25
    },
    noData: {
        color: '#464660',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 45
    }
})