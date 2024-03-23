import React, { useContext, useState } from 'react'
import { Image, Text, View } from 'react-native'
import styles from './style'
import Icon from 'react-native-vector-icons/Ionicons';
import BarCodeScanner from '../BarCodeScanner';
import { AppContext } from '../../App';

const Top = ({  }) => {
  const { isShowCameraScan, setIsShowCameraScan } = useContext(AppContext);
  const { dataBarCode, setDataBarCode } = useContext(AppContext);

  return (
        <View style={styles.wrapTop}>
        <Icon name="scan" size={30} onPress={() => setIsShowCameraScan(true)} />
        {
          dataBarCode &&
          <Text numberOfLines={1} style={styles.barCodeText}>{dataBarCode}</Text>
        }
        <Icon name="search" size={30} color="blue"/>
      </View>
  )
}

export default Top