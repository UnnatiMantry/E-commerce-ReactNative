import React from 'react';
import { FlatList, Text, View, Platform, } from 'react-native';

import { useSelector } from 'react-redux';
import HeaderButton from '../components/UI/HeaderButton';
import ProductItem from './../components/shop/ProductItem';
import SearchBar from './../components/shop/SearchBar';
//import { HeaderButtons, Item } from 'react-navigation-header-buttons';
//import HeaderButton from './../components/UI/HeaderButton';







 const Dashboard = props => {
 const products = useSelector(state => state.products.availableProducts);


  return (
    <View>

      <SearchBar />
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <ProductItem
          image={itemData.item.image}
          name={itemData.item.name}
          rating={itemData.item.rating}
          price={itemData.item.price}
          onViewDetail={() => {
            props.navigation.navigate('ProductDetail', {
              productId: itemData.item.id,
              productTitle: itemData.item.name
            });
          }}
          onAddToCart={() => {}}
        />
      )}
    />
    </View>
  );
};

  Dashboard.navigationOptions = {
    headerTitle: 'ShopStreet',
    headerRight: (
      <HeaderButton />
    )

    // headerRight: (
    //   <HeaderButtons HeaderButtonComponent={HeaderButton}>
    //     <Item
    //       title="Cart"
    //       iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
    //       onPress={() => {}}
    //     />
    //   </HeaderButtons>
    // )
   
    
    
    
  };
  
  
  
  export default Dashboard;
  