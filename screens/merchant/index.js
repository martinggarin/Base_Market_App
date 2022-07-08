import { View , StyleSheet, FlatList} from 'react-native'
import React, {useState, useEffect} from 'react'
import {useRoute, useNavigation} from '@react-navigation/native';

import ProductBox from '../../components/ProductBox';
import productData from '../../data/ProductData';
import venueData from '../../data/VenueData'
import Colors from '../../Colors/Colors';

const renderItem = ({item}) => {
    return(
        <ProductBox item={item} />
    );
};

const ProductsScreen = () => {

    const [merchantTitle, setMerchantTitle] = useState(undefined);
    const [merchantImage, setMerchantImage] = useState(undefined);

    const navigation = useNavigation();
    const route = useRoute();

    useEffect(() => {
        if (!route.params?.title) {
          return;
        }
        setMerchantTitle(route.params.title);
      }, [route.params?.title]);
      
    useEffect(() => {
        if (!route.params?.image) {
          return;
        }
        setMerchantImage(route.params.image);
      }, [route.params?.image]);

    const data = productData.filter(products => products.venue === merchantTitle);
    data.forEach(element => {
          element.image = merchantImage;
      });

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