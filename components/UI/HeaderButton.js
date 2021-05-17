// import React from 'react';
// import { Platform } from 'react-native';
// import { HeaderButton } from 'react-navigation-header-buttons';
// import { Ionicons } from '@expo/vector-icons';

// import Colors from '../../constants/Colors';

// const CustomHeaderButton = props => {
//   return (
//     <HeaderButton
//       {...props}
//       IconComponent={Ionicons}
//       iconSize={23}
//       color={Platform.OS === 'android' ? 'white' : Colors.primary}
//     />
//   );
// };

// export default CustomHeaderButton;

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HeaderButton = props => {
  return (
    
        <View style={styles.headerButton}>
      <Button title="Cart" onPress={() => {
            props.navigation.navigate({routeName: 'CartScreen'});
            //props.navigation.navigate('Cart');
        }} />
      </View>
   
      
  
     
   
  );
};

const styles = StyleSheet.create({

  
  headerButton:{
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    marginTop: 25,
    height: 10,
    marginRight:8,
    width: 80
    
    
  }
 
});

export default HeaderButton;

