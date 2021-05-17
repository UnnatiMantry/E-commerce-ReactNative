import React, { useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

const QuantityIncDec = () => {

    const [num, setNum] = useState(0);//to change the state dynamically
    const incNum = () => {
        setNum(num + 1)
    };

    const decNum = () => {
        if(num > 0){
        
        
        setNum(num - 1)
        }else{
            alert('Sorry, Zero Limit');
            setNum(0)
        }
    };



    return(
        <View style={styles.quantityButton}>
            <Button title = '+'  onPress={incNum}/>
            
            <Text>{num}</Text>

            <Button title = '-' onPress={decNum}/>

        </View>

    )
}
const styles = StyleSheet.create({

  
      quantityButton:{
      alignSelf: 'flex-start',
      justifyContent: 'space-between',
      marginTop: 15,
      marginLeft: 10,
     
      
      height: 35,
      marginRight:8,
      width: 80,
      flexDirection: 'row'
      
      
    }
   
  });

export default QuantityIncDec;