import { View, Text , StyleSheet, FlatList} from 'react-native'
import React from 'react'
import MerchantBox from '../../components/MerchantBox';
import data from '../../data/data';
import ProductData from '../../data/ProductData';
import Colors from '../../Colors/Colors';
import VenueData from '../../data/VenueData';

const renderItem = ({item}) => {
    return(
        <MerchantBox item={item} />
    );
};

const HomeScreen = () => {
  return (
    <View style={styles.page}>
        <FlatList 
            data={VenueData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
    </View>
  )
};
const styles = StyleSheet.create({
    page:{
        padding:0,
        backgroundColor: Colors.surface,
        flex:1, 
        alignContent:'center',
        justifyContent:'center',
    }
});

export default HomeScreen