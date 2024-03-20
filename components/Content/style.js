import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    wrapContent: {
        backgroundColor: "white"
    },
    contentTop: {
        padding: 5,
        flexDirection: "row",
        gap: 5,
        justifyContent: "space-between"
    },
    contentTopCommon: {
        padding: 14,
        borderRadius: 12,
        borderWidth: 3,
        borderColor: "violet",
        fontWeight: "bold",
        fontSize: 18,
        textTransform: "uppercase",
        flexShrink: 1,
        textAlign: "center",
        flex: 1,
        textAlignVertical: "center"
    },
    contentStore: {
        color: "white",
        backgroundColor: "#03A9F4"
    },
    contentNoti: {

        color: "red",
        backgroundColor: "#03A9F4"
    },
    contentMiddle: {
        padding: 5,
    },
    contentMiddleText: {
        fontWeight: "bold",
        fontSize: 16,
        textTransform: "uppercase",
        marginBottom: 7,
        marginTop: 10

    },
    contentMiddleList: {
        width: "100%",
        gap: 5,
    },
    contentMiddleItem: {
        paddingVertical: 30,
        paddingHorizontal: 12,
        backgroundColor: "pink",
        marginRight: 7,
        color: "#b81313",
        fontSize: 20,
        fontWeight: "bold",
        width: 120,
        textTransform: 'uppercase',
        textAlign: "center"
        
    },
    contentBottom: {
        height: '100%',
        padding: 5,
    },
    contentBottomText: {
        fontWeight: "bold",
        fontSize: 16,
        textTransform: "uppercase",
        marginBottom: 7,
        marginTop: 10

    },

    hexagon: {
        width: 100,
        height: 120,
        marginRight: 10
      },
      hexagonInner: {
        width: 100,
        height: 120,
        backgroundColor: "#eeecec",

      },
      hexagonText: {
        paddingHorizontal: 10,
        color: '#b81313',
        textAlignVertical: "center",
        height: "100%",
        textAlign: "center",
        textTransform: "uppercase",
        fontWeight: "600"
      },
      hexagonAfter: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: 0,
        height: 0,
        borderStyle: "solid",
        borderLeftWidth: 50,
        
        borderLeftColor: "white",
        borderRightWidth: 50,
        borderRightColor: "white",
        borderTopWidth: 25,
        borderTopColor: "#eeecec",
      },
      hexagonBefore: {
        position: "absolute",
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        borderStyle: "solid",
        borderLeftWidth: 50,
        borderLeftColor: "white",
        borderRightWidth: 50,
        borderRightColor: "white",
        borderBottomWidth: 25,
        borderBottomColor: "#eeecec",
      },
})

export default styles;