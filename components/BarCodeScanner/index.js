import React, { useContext, useState } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  Dimensions,
  View
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/Ionicons';
import { AppContext } from '../../App';

const windowHeight = Dimensions.get('window').height;

const BarCodeScanner = () => {
  const { dataBarCode, setDataBarCode } = useContext(AppContext);
  const {isShowCameraScan, setIsShowCameraScan} = useContext(AppContext);

  const onSuccess = e => {
    setDataBarCode(e.data);
    setIsShowCameraScan(false)
    // Linking.openURL(e.data).catch(err =>
    //   console.error('An error occured', err)
    // );
  };

  
    return (
      <QRCodeScanner
        containerStyle={styles.wrapCamera}
        cameraStyle={styles.wrapInnerCamera}
        cameraContainerStyle={styles.wrapCamera}
        topViewStyle={styles.wrapTopCamera}
        bottomViewStyle={styles.wrapBottomCamera}
        onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={
          <View style={styles.topCamera}>
            <Icon onPress={() => {
                setIsShowCameraScan(false)
            }}  style={styles.topCameraText} name="arrow-back" size={30} />
            <Text style={styles.topCameraText}>Scan Code</Text>
            <Text></Text>
          </View>
        }
        // bottomContent={
        //   <TouchableOpacity>
        //     <Text style={styles.buttonText}>OK. Got it!</Text>
        //   </TouchableOpacity>
        // }
        showMarker={true}
      />
    );
  
}

const styles = StyleSheet.create({
    wrapCamera: {
        height: windowHeight,
    },
    wrapInnerCamera: {
        height: windowHeight,
        top: 0

    },
    wrapTopCamera: {
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        position: "absolute",
        top: 0,
        zIndex: 100,
        height: 70
    },
    topCamera: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 20,

    },
    topCameraText: {
        color: "white",
        textTransform: "uppercase",
        fontWeight: "bold"
    },
    // wrapBottomCamera: {
    //     backgroundColor: "red",
    //     position: "absolute",
    //     bottom: 0,
    //     height: 100,
    //     display: "none"
    // },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});

export default BarCodeScanner;

// AppRegistry.registerComponent('default', () => BarCodeScanner);