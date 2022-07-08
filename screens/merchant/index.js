import { View, Text , StyleSheet, FlatList} from 'react-native'
import React from 'react'
import ProductBox from '../../components/ProductBox';
import data from '../../data/ProductData';
import venueData from '../../data/VenueData'
import Colors from '../../Colors/Colors';

const renderItem = ({item}) => {
    return(
        <ProductBox item={item} />
    );
};

const ProductsScreen = () => {
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

export default ProductsScreen