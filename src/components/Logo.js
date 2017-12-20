import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Image
} from 'react-native';

export default class Login extends React.Component {
    render() {
        return(
            <View style={styles.container}>
            <Image style={{width: 150, height: 150}}
            source={require('../images/Logo.png')}/>
            <Text style={styles.logoText}>Dobrodošli u Kvisko!</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container : {
      flexGrow: 1, 
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
      
    logoText : {
          marginVertical: 10,
          fontSize: 18,
          color: 'rgba(255, 255, 255, 0.7)'

      }
  });