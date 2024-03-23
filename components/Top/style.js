import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    wrapCamera: {
        height: windowHeight,
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        // backgroundColor: "green",
        
    },
    wrapTop: {
        borderRadius: 4,
        padding: 10,
        borderWidth: 1,
        borderColor: "orange",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 4
    },
    barCodeText: {
        fontWeight: "bold",
        fontSize: 20,
        overflow: "hidden",
        flex: 1,
        textAlign: "center",
        textDecorationLine: "underline"
    }
})

export default styles;