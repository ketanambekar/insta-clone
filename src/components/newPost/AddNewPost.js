import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import FormikPostUploader from './FormikPostUploader';

const AddNewPost = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header navigation={navigation}/>
            <FormikPostUploader />
        </View>
    )
}

const Header = ({navigation}) => {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Image source={require('../../assets/back.png')} style={{ width: 30, height: 30 }} />
            </TouchableOpacity>
            <View>
                <Text style={{color: '#fff', fontWeight: '700', fontSize: 18, marginRight: 27.5, width:'100%'}}>NEW POST</Text>
            </View>
            <Text></Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginTop: 10
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText: {

    }
})

export default AddNewPost