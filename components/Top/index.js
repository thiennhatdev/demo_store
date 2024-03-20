import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from './style'
import Icon from 'react-native-vector-icons/Ionicons';

const Top = () => {
  return (
    <View style={styles.wrapTop}>
      <Icon name="scan" size={30} />
      <Icon name="search" size={30} color="blue"/>
        
    </View>
  )
}

export default Top