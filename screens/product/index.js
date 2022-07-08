import { View, Text, ImageBackground, ActivityIndicator} from 'react-native'
import React, {useEffect, useState} from 'react';
import { useRoute } from '@react-navigation/native';
import styles from './style';
import productData from '../../data/ProductData';
import venueData from '../../data/VenueData';

const ProductScreen = (props) => {
  const [id, setId] = useState(undefined);
  const [image, setImage] = useState(undefined);

  const route = useRoute();

  useEffect(() =>{
    if(!route.params?.id){
      return;
    }
    setId(route.params.id);
  }, [route.params?.id]);

  useEffect(() =>{
    if(!route.params?.image){
      return;
    }
    setImage(route.params.image);
  }, [route.params?.image]);

  const data = productData.filter(product => product.id === id)[0]; 
  
  if (!data) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.root} >
      <View style={styles.divtop}>
        <ImageBackground 
            style={styles.image} 
            source={{uri: image}} 
            resizeMode='cover'>
        </ImageBackground>
      </View>
      <View style={styles.divbot}>
        <View style={styles.div2}>
            <Text style={styles.title} >
                {data.venue+ ` - ` +data.date} 
            </Text>
            <Text style={styles.subtitle} >
                {data.title+ ` - ` +data.description} 
            </Text>
        </View>
        <View style={styles.div3}>
          <View style={styles.textContainer1}></View>
            <View style={styles.textContainer}>
              <Text style={styles.text1}>{data.title}</Text>
              <Text style={styles.text2}>${data.price}</Text>
            </View>
        </View>

        <View style={styles.div3}>
          <View style={styles.textContainer1}></View>
            <View style={styles.textContainer}>
              <Text style={styles.text1}>3 Tickets Together</Text>
              <Text style={styles.text2}></Text>
            </View>
        </View>

        <View style={styles.div2}></View>
        
      </View>
    </View>
  )
}

export default ProductScreen;