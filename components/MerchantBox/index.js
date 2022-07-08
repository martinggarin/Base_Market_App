import { View, Text,ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const MerchantBox = (props) => {
  
  const {item} = props;
  
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Merchant', {title: item.title, image:item.image});
  };

  return (
    <TouchableOpacity onPress={onPress}>
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
    </TouchableOpacity>
  )
};
export default MerchantBox