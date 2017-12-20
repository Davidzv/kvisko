import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    StatusBar,
    TouchableOpacity 
} from 'react-native';
import Logo from '../components/Logo';
import Form from '../components/Form';
import {Actions} from 'react-native-router-flux';

export default class Signup extends React.Component {
    
    goBack() {
        Actions.goBack();
    }
  
      render() {
          return(
              <View style={styles.container}>
                  <Logo/>
                  <Form type="Signup"/>
                  <View style={styles.signupTextCont}>
                      <Text style={styles.signupText}>Imate registrovan profil?</Text>
                      <TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}> Prijava</Text></TouchableOpacity>
                  </View>
              </View>	
              )
      }
  }

const styles = StyleSheet.create({
    container : {
      backgroundColor: '#445963',
      flexGrow: 1, 
      alignItems: 'center',
      justifyContent: 'center',
    },

    signupButton:{
        color:'#ffffff',
        fontSize: 16,
        fontWeight: '500'
    },

    signupText: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 16
    },
    signupTextCont:{
        flexGrow: 1, 
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 35,
        flexDirection: 'row',
    }
  });