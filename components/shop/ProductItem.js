import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, } from 'react-native';

import Colors from '../../constants/Colors';

const ProductItem = props => {
 
  return (
    <TouchableOpacity onPress={props.onViewDetail}>
    <View style={styles.product}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: props.image }} />
      </View>
      <View style={styles.details}>
        <Text style={styles.name}>{props.name}</Text>
        <View style={styles.actions}>
      {/* <Button
          color={Colors.primary}
          title="Rating(stars)"
          
        /> */}
          <View style={styles.details}>
        
        <Text style={styles.rating}>Ratings: {props.rating} </Text>
      </View>


         <Text>{'\n'}</Text>

        {/* <Button
          color={Colors.primary}
          title="Price"
          onPress={props.onPrice}
        /> */}

       <View style={styles.details}>
        
        <Text style={styles.price}>MRP: ${props.price.toFixed(2)}</Text>
      </View>

        <Text>{'\n'}</Text>
        <Button
          color={Colors.primary}
          title="Add to Cart"
          onPress={props.onAddToCart}
        />
         <Text>{'\n'}</Text>
         <Button
          color={Colors.primary}
          title="View detail"
          onPress={props.onViewDetail}
        />


        
        
       
      </View>
     
      </View>
     

    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  product: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 300,
    margin: 20,
    flexDirection: 'row'
    
     
  },
  imageContainer: {
    width: '50%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  details: {
   alignItems: 'center',
    height: '15%',
    padding: 10
  },
  name: {
    fontSize: 9,
    marginVertical: 4,
    marginBottom: 8
    
   

  },
  
  actions: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%',
    paddingHorizontal: 10,
    
    
    
  }
});

export default ProductItem;