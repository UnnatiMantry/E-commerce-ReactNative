
 import React from 'react';

 import { StyleSheet, View } from 'react-native';
 import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

 


import productsReducer from './store/reducers/products';
import ProductsNavigator from './navigation/ProductsNavigator';


const rootReducer = combineReducers({
  products: productsReducer
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <ProductsNavigator />
      
     
      
    </Provider>

    



  );
}






//  export default function App1() {
//    return (
//     <View style={styles.screen}>
//       <Header title="Shop Street" />
//        <Dashboard />
     
     
//      </View>
    
//    );
  
//  }

 


 const styles = StyleSheet.create({
   screen: {
     flex: 1
   }
 });


