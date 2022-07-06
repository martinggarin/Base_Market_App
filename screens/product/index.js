import { View, Text, ImageBackground } from 'react-native'
import React from 'react';
import styles from './style';
import ProductData from '../../data/ProductData';
import venueData from '../../data/VenueData';

const ProductScreen = (props) => {
  const {item} = ProductData;
  return (
    <View style={styles.root} >
      <View style={styles.divtop}>
        <ImageBackground 
            style={styles.image} 
            source={{uri: venueData[0].image}} 
            resizeMode='cover'>
        </ImageBackground>
      </View>
      <View style={styles.divbot}>
        <View style={styles.div2}>
            <Text style={styles.title} >
                Fri - 8/12 - 7:30 PM 
            </Text>
            <Text style={styles.subtitle} >
                Sec FLOOR Row GA - 3 Tickets 
            </Text>
        </View>
        <View style={styles.div3}>
          <View style={styles.textContainer1}></View>
            <View style={styles.textContainer}>
              <Text style={styles.text1}>3 Tickets Together</Text>
              <Text style={styles.text2}>$207</Text>
            </View>
        </View>

        <View style={styles.div3}>
          <View style={styles.textContainer1}></View>
            <View style={styles.textContainer}>
              <Text style={styles.text1}>3 Tickets Together</Text>
              <Text style={styles.text2}>$207</Text>
            </View>
        </View>

        <View style={styles.div2}></View>
        
      </View>
    </View>
  )
}

export default ProductScreen;