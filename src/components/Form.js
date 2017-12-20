import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput,
    TouchableOpacity
} from 'react-native';

import {Actions} from 'react-native-router-flux';
export default class Form extends React.Component {

   /* pocetna(){
        Actions.pocetna()
    }*/
    render() {
        return(
            <View style={styles.container}>
            <TextInput style={styles.inputBox} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Email"
                placeholderTextColor='#ffffff'
                selectionColor="#fff"
                keyboardType="email-address"
                onSubmitEditing={()=> this.password.focus()}
                />
             <TextInput style={styles.inputBox} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                secureTextEntry={true}
                placeholder="Šifra"
                placeholderTextColor='#ffffff'
                ref={(input) => this.password = input}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>{this.props.type}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
      flexGrow: 1, 
      justifyContent: 'center',
      alignItems: 'center'
    },

    inputBox: {
        width: 300,
        paddingVertical:10,
        backgroundColor: 'rgba(255, 255, 255, 0.2)', 
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 7
    },
    button:{
        width: 300,
        backgroundColor: '#1c313a', 
        borderRadius: 25,
        marginVertical: 12,
        paddingVertical: 13,

    },

    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    }
      
  });