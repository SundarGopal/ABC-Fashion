import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
  View,
  Image, FlatList
} from 'react-native';
import {
  getProductByRate,
  getProductByName,
  getProducts,
} from './services/productstorage';

import {useNavigation} from '@react-navigation/native';
import styles from '../Styles';
import { Dimensions } from "react-native";

 export const ARROW=require('../../src/ARROW.png')

let products = [
  {id:'1', "title":"V Neck Shirt - Pink"},];

  const cartAlert=()=>{
    Alert.alert(
      
      "Want to delete item from cart?",
      [{text: "Cancel",style:"cancel"},
    {text:"OK",style:"ok"}
    ],
    {cancelable: true}
    );
  }

const checkout = navigation => {
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
const win = Dimensions.get('window');
const Item = ({ item,  onPress,style }) => (
  


  
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
       <View style={{flexDirection: 'row'}}>
      <Image style={{
    width: win.width/2,
    height: win.width/2,
    resizeMode: "contain",
    alignSelf: "center",
    flex:1,
    borderWidth: 0,
    borderRadius: 100,
  }} source={require('../../src/tshirt/0005_fashion_image.jpg')}/>
      
      <View style={{flex:2,  height: 20}} >
      <Text style={styles.title}>{item.title}</Text>
      

    <Text style={styles.details}>1, Pink </Text>
    <Text style={styles.title}></Text>
    <Text style={[styles.details],[styles.setcolour1]}> $24.99 </Text>
    <Text style={styles.title}></Text>

              

       
        <View style={{
            flex: 1,
            flexDirection: 'row', }}>
              <TouchableHighlight
        style={{backgroundColor: "#B2BEB5",
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        width:10,
        borderRadius:200,
        marginTop:0,}} 
        onPress={cartAlert}
        >
        <Text style={styles.loginText}>-</Text>
      </TouchableHighlight>
      <TouchableHighlight
          style={{backgroundColor: "black",
          height: 15,
          flex: 0.2,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 15,
          borderRadius: 20,
          marginTop:5,}}  
      onPress={()=>{}}>
        <Text style={styles.loginText}>1</Text>
      </TouchableHighlight>
      <TouchableHighlight
          style={{backgroundColor: "#B2BEB5",
          height: 30,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 0,

          borderRadius: 1000,
          marginTop:0,}} 
       >
        <Text style={styles.loginText}>+</Text>
      </TouchableHighlight>
        </View>
     </View>
    </View>   
       
    
   </TouchableOpacity>
  
  
);


const Cart = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [count, doRender] = useState(0);
  const [users, setUsers] = useState([]);
 
  reloadUser = async()=>{
    let userlist= products;
    console.log("get users"+JSON.stringify(userlist))
    setUsers(userlist);
    doRender(count+1)
  }

  ondelete=async(item)=>{
   
      console.log("del"+item.id)
      let id=item.id;
      await deleteUser(id)
      reloadUser();

  }
  
console.log("products: "+products)
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#ffffff" :"#ffffff";
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        onEdit={()=>{
          console.log("user pressed edit button. Everything is :"+JSON.stringify(item));
          navigation.navigate('EditUser',item);
          }}
        onDelete={()=>{ondelete(item)
        }}
        style={{ backgroundColor }}
      />
    );
  };
  const navigation = useNavigation();
  return (
    <View style={styles.Cartmaincontainer}>
      <FlatList
          
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      

      <TouchableHighlight
        style={[
          styles.CartbuttonContainer,
          styles.CartloginButton,
          styles.CartsubmitButton,
        ]}
        onPress={() => checkout(navigation)}>
          
          <View style={{flexDirection:'row',width: "80%",
      borderRadius: 100, }} >
                    <Text style={{    color: 'white', fontSize: 15,}}>Check Out</Text>
                    <Image source={ARROW} />
                    </View>
        
      </TouchableHighlight>
         <Text style={styles.CartforTotal}>TOTAL</Text>
      <Text style={styles.CartforTotal1}>$24.99</Text>
      <Text style={styles.CartforTotal2}>Free Domestic Shipping</Text>
    </View>
  );
};

export default Cart;

