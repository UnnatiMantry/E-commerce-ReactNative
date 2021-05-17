 
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from "react-navigation";
import { Platform } from 'react-native';

import Dashboard from '../screens/Dashboard';
import Colors from './../constants/Colors';
import ItemDescription from '../screens/ItemDescription';
//import CartScreen from '../screens/CartScreen'

const ProductsNavigator = createStackNavigator(
  {
    
  Products: Dashboard,
  ProductDetail: ItemDescription,

  //Cart: CartScreen
},

{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
  }
}
);

export default createAppContainer(ProductsNavigator);

