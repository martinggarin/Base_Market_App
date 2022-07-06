import { StyleSheet } from "react-native";
import Colors from "../../Colors/Colors";

const styles = StyleSheet.create({
    root:{
        margin:5,
        flex:1,
        borderColor:'grey',
        height:150,
        justifyContent:'center',
        width:400
    },
    title:{
        textAlign:'left',
        fontSize:16, 
        color: Colors.surfaceText,
        fontWeight:'bold',
        paddingHorizontal:8,
    },
    price:{
        fontSize:18, 
        color:'white',
        fontWeight:'bold'
    },
    image:{
        flex:1,
        flexDirection:'column',
        width:'100%'
    },
    div:{
        flex:2,
        justifyContent:'row',
        textAlign:'right',
        paddingHorizontal:5,
    },
    div1:{
        flex:4,
        justifyContent:'row',
        textAlign:'right',
        paddingHorizontal:5,
    },
    titleContainer:{
        flex:1,
    },
    subtitleContainer:{
        flexDirection:'row',
        paddingHorizontal:8,
        flex:2,
    },
    bottomEmpty:{
        flex:1,
    },
    date:{
        fontSize:12, 
        color:'white',
        textAlign:'left',
        flex:1,
        opacity:.60,
        paddingTop:2,
        fontWeight:'bold'
    },
});
export default styles;