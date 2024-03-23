
import React, { useContext, useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';

import styles from './style';
import Top from '../../components/Top';
import Content from '../../components/Content';
import BarCodeScanner from '../../components/BarCodeScanner';

const Home = (props) => {
  
  return (
    <SafeAreaView style={styles.wrapper}>
        <Top />
        <Content />
    </SafeAreaView>
  )
}

// Home = () => <NetworkLogger />;

export default Home