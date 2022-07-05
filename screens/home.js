import { View, Text , StyleSheet, FlatList} from 'react-native'
import React from 'react'
import Box from '../components/box'
import data from '../data/data';
import Colors from '../Colors/Colors';

const renderItem = ({item}) => {
    return(
        <Box item={item} />
    );
};

const home = () => {
  return (
    <View style={styles.page}>
        <FlatList 
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
    </View>
  )
};
const styles = StyleSheet.create({
    page:{
        padding:0,
        backgroundColor: Colors.background,
        flex:1, 
    }
});

export default home