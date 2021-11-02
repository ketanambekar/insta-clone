import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Header = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity>
                    <Image style={styles.logo} source={require('../../assets/logo.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={()=> navigation.push('NewPostScreen')}>
                    <Image style={styles.iconContainer} source={require('../../assets/add.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.iconContainer} source={require('../../assets/heart.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.unreadView}>
                        <Text style={styles.unreadText}>23</Text>
                    </View>
                    <Image style={styles.iconContainer} source={require('../../assets/chat.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20

    },
    logo: { width: 100, height: 50, resizeMode: 'contain' },
    iconContainer: { width: 25, height: 25, resizeMode: 'contain', marginLeft: 10 },
    unreadView: {
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: 50,
        alignItems: 'center',
        right: -10,
        bottom: 15,
        zIndex: 99,
        justifyContent: 'center',
        width: 25,
        height: 20
    },
    unreadText: { color: "#fff" , fontWeight: '600' }
})

export default Header