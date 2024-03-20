import React from 'react'
import { FlatList, Text, View, useWindowDimensions, StyleSheet } from 'react-native'
import styles from './style'
import { TabView, SceneMap } from 'react-native-tab-view';

const data = [
    {   
        label: "điện máy gia dụng"
    },
    {
        label: "thực phẩm"
    },
    {
        label: "thiết bị điện"
    },
    {
        label: "thiết bị công nghiệp"
    },
    {
        label: "thiết bị nông nghiệp"
    },
    {
        label: "thiết bị y tế"
    },
    {
        label: "quần áo"
    },
    {
        label: "giày dép"
    },
    {
        label: "thiết bị di động"
    }
]

const FirstRoute = () => (
    <View >
        <Text>Danh sách trái cây</Text>
    </View>
);

const SecondRoute = () => (
    <View  >
        <Text>Danh sách thực phẩm đóng hộp</Text>

    </View>
);
const ThirdRoute = () => (
    <View  >
        <Text>Danh sách hải sản tươi sống</Text>

    </View>
);
const FourRoute = () => (
    <View  >
        <Text>Danh sách đồ ăn nhanh</Text>

    </View>
);

const Hexagon = ({ text }) => {
    return (
      <View style={styles.hexagon}>
        <View style={styles.hexagonInner} >
            <Text style={styles.hexagonText}>{text}</Text>

        </View>
        <View style={styles.hexagonBefore} />
        <View style={styles.hexagonAfter} />
      </View>
    );
  };

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    four: FourRoute,
});

const Content = () => {

    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Trái cây' },
        { key: 'second', title: 'Thực phẩm đóng hộp' },
        { key: 'third', title: 'Hải sản tươi sống' },
        { key: 'four', title: 'Đồ ăn nhanh' },
    ]);

    return (
        <View style={styles.wrapContent}>
            <View style={styles.contentTop}>
                <Text style={[styles.contentStore, styles.contentTopCommon]}>Nội quy của hàng</Text>
                <Text style={[styles.contentNoti, styles.contentTopCommon]}>Thông tin thông báo</Text>
            </View>
            <View style={styles.contentMiddle}>
                <Text style={styles.contentMiddleText}>
                    Sản phẩm
                </Text>
                <FlatList style={styles.contentMiddleList}
                    horizontal={true}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.index}
                    data={data}
                    renderItem={({ item, index }) => {
                        return <Hexagon key={index} text={item.label} />
                        
                    }}
                />
            </View>
            <View style={styles.contentBottom}>
                <Text style={styles.contentBottomText}>
                    Thực phẩm
                </Text>
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                />
            </View>
        </View>
    )
}

export default Content