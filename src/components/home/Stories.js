import React from 'react'
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { USERS } from '../../data/users';


const Stories = () => {
    console.log(USERS)
    return (
        <View style={{ marginBottom: 13 }}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false} >
                {USERS.map((item, index) => (
                    <View key={item.user} style={styles.storyView}>
                        <Image source={{ uri: item.image }}
                            style={styles.story} />
                        <Text style={styles.user}>{
                        item.user.length > 11 ? item.user.slice(0,10).toLocaleLowerCase() + '...' : item.user.toLocaleLowerCase()}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    story: {
        width: 70, height: 70, borderRadius: 50, marginLeft: 6, borderWidth: 3,
        borderColor: '#ff8501'
    },
    storyView: { alignItems: 'center'},
    user: { color: '#fff' }

})

export default Stories