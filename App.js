/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { createContext, useMemo, useState } from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Content from './components/Content';
import BottomMenu from './components/BottomMenu';
import Top from './components/Top';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Screens/Home';
import BarCodeScanner from './components/BarCodeScanner';

const windowHeight = Dimensions.get('window').height;


function ReportScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Báo cáo</Text>
    </View>
  );
}

function QualityScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Chất lượng</Text>
    </View>
  );
}

function SettingScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Cài đặt</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();

export const AppContext = createContext({
  isShowCameraScan: false,
  setIsShowCameraScan: () => { },
  dataBarCode: null,
  setDataBarCode: () => { },
})

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [isShowCameraScan, setIsShowCameraScan] = useState(false);
  const [dataBarCode, setDataBarCode ] = useState(null);

  const value = useMemo(
    () => ({ isShowCameraScan, setIsShowCameraScan, dataBarCode, setDataBarCode }),
    [isShowCameraScan, dataBarCode]
  );

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <AppContext.Provider value={value}>
      {
        !isShowCameraScan ?
          <NavigationContainer >
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIconStyle: {
                  display: "none"
                },
                tabBarLabelStyle: {
                  fontSize: 14,
                  textAlignVertical: "center",
                  height: "100%",
                  fontWeight: "bold"
                },
                tabBarStyle: {
                  // position: "absolute",
                  // zIndex: 0,
                  // height: 0
                  // display: "none"
                }
              })}
            >
              <Tab.Screen name="CỬA HÀNG" component={Home} />
              <Tab.Screen name="CHẤT LƯỢNG" component={QualityScreen} />
              <Tab.Screen name="BÁO CÁO" component={ReportScreen} />
              <Tab.Screen name="CÀI ĐẶT" component={SettingScreen} />
            </Tab.Navigator>
          </NavigationContainer>
          : <View style={styles.wrapCamera}>
            <BarCodeScanner />
            </View>
      }

    </AppContext.Provider>

  );
}

const styles = StyleSheet.create({
  wrapCamera: {
    height: windowHeight,
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
    backgroundColor: "black"
},
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
