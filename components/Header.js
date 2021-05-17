import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>

        <View style={styles.headerButton}>
      <Button title="Cart" onPress={() => {
            props.navigation.navigate({routeName: 'CartScreen'});
        }} />
      </View>
   </View>
   
      
  
     
   
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: '#f7287b',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  headerTitle: {
    color: 'black',
    fontSize: 18,
    
  },
  headerButton:{
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    marginTop: 0,
    height: 10,
    
    
  }
 
});

export default Header;
