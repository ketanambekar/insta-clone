import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Divider } from 'react-native-elements';





const BottomTabs = ({ icons }) => {
    const [ activeTab, setActiveTab] = useState('Home')

    const Icon = ({ icons }) => {
        return (
            <TouchableOpacity onPress= {()=> setActiveTab(icons.name)}>
                <Image style={styles.icon} source={icons.name === activeTab ? icons.active : icons.inactive} />
            </TouchableOpacity>
        )
    }


    return (
        <View style={{
            position: 'absolute',
            width: '100%',
            bottom: 0,
            zIndex: 999,
            backgroundColor: 'black'
        }}>
            <Divider width={1} orientation="vertical" />
        <View style={{flexDirection: 'row', justifyContent: 'space-around', height: 50, paddingTop: 10}}>
            {icons.map((item, index) => (
                <Icon key={index} icons={item} />
            ))}
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30
    }
})

export default BottomTabs