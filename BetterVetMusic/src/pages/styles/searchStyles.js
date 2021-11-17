import { StyleSheet } from 'react-native'


export const Styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#f1e9e5'
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: '#151515',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 30,
        flex: 0.9
    },
    title: {
        color: '#151515',
        marginLeft: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },
    picker: {
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 30
    },
    pickerItem: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    noData: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        height: 120
    }
})