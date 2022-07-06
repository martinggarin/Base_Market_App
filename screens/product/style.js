import { StyleSheet, ImageBackground} from "react-native";
import Colors from "../../Colors/Colors";

const styles = StyleSheet.create({
    root:{
        flexDirection:'column',
        flex: 1,
    },
    divtop:{
        flex:10,
        backgroundColor:Colors.surface
    },
    divbot:{
        flex:9,
        backgroundColor:Colors.surface
    },
    div2:{
        flexDirection: 'column',
        flex: 4,
        borderBottomWidth:.2,
        borderColor:'black',
    },
    div3:{
        flexDirection: 'column',
        flex: 3,
        borderBottomWidth:.2,
        borderColor:'black',
        paddingHorizontal:8,
        textAlignVertical:'center',
        justifyContent:'center'
    },
    image:{
        flex:6,
        height:400,
        width: 400,

    },
    title:{
        fontSize:18, 
        fontWeight:'bold',
        color:Colors.surfaceText,
        textAlign:'center',
        paddingTop:15
    },
    subtitle:{
        fontSize:14, 
        fontWeight:'bold',
        color:Colors.surfaceText,
        textAlign:'center',
        opacity:.60,
        paddingTop:2,
        fontWeight:'bold'
    },
    text1:{
        textAlign: 'left',
        color: Colors.surfaceText,
        fontSize: 16,
        fontWeight:'bold',
        paddingStart:15,
        textAlignVertical:'center',
        
    },
    text2:{
        textAlign: 'right',
        color: Colors.surfaceText,
        fontSize: 20,
        fontWeight: 'bold',
        flex:1,
        paddingEnd:15,
        
    },
    textContainer:{
        flex:2,
        alignContent:'center',
        textAlignVertical:'center',
        flexDirection:'row',
    },
    textContainer1:{
        flex:1,
        alignContent:'center',
        textAlignVertical:'center',
        flexDirection:'row',
         
    }

    
});
export default styles;