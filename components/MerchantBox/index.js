import { View, Text,ImageBackground} from 'react-native';
import React from 'react';
import styles from './styles';

const MerchantBox = (props) => {
  const {item} = props;
  return (
    <View style={styles.root}>
      <ImageBackground 
        style={styles.image} 
        resizeMode='cover'
        imageStyle={{ borderRadius: 5}}

        source={{uri: item.image}}>

            <View style={styles.div1}></View>
            <View style={styles.div}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{props.item.title.substring(0,30)}</Text>
                </View>
                <View style={styles.subtitleContainer}>
                    <Text style={styles.date}>{props.item.date} +</Text>
                    <Text style={styles.price}>${Math.ceil(props.item.price)}</Text>
                </View>
                
            </View>
      </ImageBackground>
    </View>
  )
};
export default MerchantBox