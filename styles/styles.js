import { StyleSheet, Dimensions } from "react-native";

const {width, height} = Dimensions.get("screen");

const styles = StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: "blue",
       justifyContent: "center",
       alignItems: "center",
       marginTop: 50,
   },
   inputContainer: {
        marginVertical: 15,
   },
   inputContainerCcMao: {
       justifyContent: "flex-start",
       textAlign: "left",
       fontWeight: "bold",
       fontSize: 20,
       color:"lightgrey",
       marginVertical: 10,
   },
   calClearButtons: {
       flexDirection: "row",
       justifyContent: "space-around",
       alignSelf: "stretch",
       textAlign: "left",
       fontWeight: "bold",
       fontSize: 50,
       color:"red",
       marginVertical: 10,
       
},
   input: {
       borderColor: "black",
       backgroundColor: "white",
       borderWidth: 1,
       width: width / 1.3,
       padding: 0,
       
   },
   label: {
       color: "lightgrey",
   },
});

export { styles };