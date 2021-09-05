import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
  View,
} from 'react-native';
import {
  getProductByRate,
  getProductByName,
  getProducts,
} from './services/productstorage';

import {useNavigation} from '@react-navigation/native';
import styles from '../Styles';
let products = [
  {
    id: 1,
    url: './FashionApp/src/tshirt/0001_fashion_image.jpg',
    name: 'V Neck Shirt',
    rate: '24.99',
    rating: '4.9',
    color: 'Light Green',
  },
  {
    id: 2,
    url: './FashionApp/src/tshirt/0002_fashion_image.jpg',
    name: 'V Neck Shirt',
    rate: '25.99',
    rating: '4.8',
    color: 'Purple',
  },
];

const placeorder = navigation => {
  Alert.alert(
    'Are you sure ',
    'You want to Place order',

    [
      {text: 'Yes', onPress: () => navigation.navigate('OrderPlaced')},
      {
        text: 'No',
        onPress: () => console.log('No button clicked'),
        style: 'cancel',
      },
    ],
    {
      cancelable: true,
    },
  );
};

const Cart = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.Cartmaincontainer}>
      <Text style={styles.cartheading}>Cart</Text>

      <TouchableHighlight
        style={[
          styles.CartbuttonContainer,
          styles.CartloginButton,
          styles.CartsubmitButton,
        ]}
        onPress={() => placeorder(navigation)}>
        <Text style={styles.CartloginText}>Place Order</Text>
      </TouchableHighlight>
      <Text style={styles.CartforTotal}>TOTAL</Text>
      <Text style={styles.CartforTotal1}>$00.00</Text>
    </View>
  );
};

export default Cart;