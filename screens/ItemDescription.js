import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StyleSheet
} from 'react-native';
import { useSelector } from 'react-redux';

import Colors from './../constants/Colors';
import HeaderButton from '../components/UI/HeaderButton';
//import { Button } from 'react-native';
import QuantityIncDec from '../components/shop/QuantityIncDec';


const ItemDescription = props => {
  const productId = props.navigation.getParam('productId');
  const selectedProduct = useSelector(state =>
    state.products.availableProducts.find(prod => prod.id === productId)
  );

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedProduct.image }} />
      <Text style={styles.name}>{selectedProduct.name}</Text>
      <Text style={styles.rating}>Ratings: {selectedProduct.rating}</Text>
      <Text style={styles.price}>MRP: ${selectedProduct.price.toFixed(2)}</Text>
      <Text>Quantity:</Text>
      <QuantityIncDec />
      
      <View style={styles.actions}>
        <Button color={Colors.primary} title="Add to Cart" onPress={() => {}} />
      </View>
      
     
    </ScrollView>
  );
};



 ItemDescription.navigationOptions = {
  headerTitle: 'ShopStreet',
  headerRight: (
    <HeaderButton />
  )
  
  
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 400
  },
  actions: {
    marginVertical: 10,
    alignItems: 'center'
  },
  name: {
    fontSize: 15,
    //marginVertical: 1,
    
    marginTop:14
    
    
   

  },
});

export default ItemDescription;
