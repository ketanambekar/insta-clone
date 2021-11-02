import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/home/Header';
import Stories from '../components/home/Stories';
import Post from '../components/home/Post';
import { POSTSDATA } from '../data/postsData';
import BottomTabs from '../components/home/BottomTabs';

const BottomTabsIcons = [{
    name: "Home",
    active: require('../assets/home_active.png'),
    inactive: require('../assets/home_inactive.png')

},
{
    name: "Search",
    active: require('../assets/search_active.png'),
    inactive: require('../assets/search_inactive.png')

},{
    name: "Reals",
    active: require('../assets/reals_active.png'),
    inactive: require('../assets/reals_inactive.png')

}, {
    name: "Shop",
    active: require('../assets/shop_active.png'),
    inactive: require('../assets/shop_inactive.png')

},
{
    name: "Profile",
    active: require('../assets/profile_active.png'),
    inactive: require('../assets/profile_inactive.png')

}]

const HomeScreen = ({navigation}) => {
    return(
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} />
            <Stories />
            <ScrollView>
                {POSTSDATA.map((item,index) => ( <Post post={item} key={index} />))}
           
            </ScrollView>
            <BottomTabs icons={BottomTabsIcons} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'black'}
})

export default HomeScreen