import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
const INSTA_LOGO = "https://lh3.googleusercontent.com/proxy/L1ScQnpsRkEI3NBxw7YZcHxFP4jCvWRmGyEfGF5fYldiCLuUs-cW4OPzAjFBoLp3G-LZflzUawJMA15jC8mtixNLxL9JsVPK2Wnmm_rbdQnfxghyN7pOFCHcEJ18uIvpd1PfwNSh8mR3yDzDVQmQAwEzKUU0"
const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
            <Image style={styles.logo} source={{uri: INSTA_LOGO, height: 100, width: 100}} />
                <Image style={styles.logo} source={require('../assets/logo.png')} />
            </View>
        </View>
    )
}

export default LoginScreen


const styles = StyleSheet.create({
    container: { backgroundColor: 'black', flex: 1},
    logoContainer: { flexDirection: 'row' },
    logo: { width: 100, height: 50, resizeMode: 'contain' },
})