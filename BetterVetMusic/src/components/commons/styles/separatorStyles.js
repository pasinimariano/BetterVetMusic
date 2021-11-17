import { StyleSheet } from 'react-native'


export const Styles = StyleSheet.create({
    separatorContainer: {
        height: 30,
        width: '100%',
        marginTop: 25
    },
    nameSeparator: {
        width: '90%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 15,
    },
    textSeparator: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#151515'
    },
    separator: {
        borderBottomColor: '#151515',
        borderBottomWidth: 2,
        width: '85%',
    }
})