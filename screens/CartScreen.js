import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CartScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>ItemDescription</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CartScreen;
