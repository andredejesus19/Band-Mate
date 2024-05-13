import { StatusBar } from 'expo-status-bar';
import { Button, Image, ImageBackgroundBase, KeyboardAvoidingView,TouchableOpacity, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, } from 'react-native';
import { useState } from 'react';
import styles from './style';
import CampPwd from './defaultConfigs'
import CampTxt from './defaultConfigs'


export default function App() {

  const handlePress = () => {
    // Lógica a ser executada quando o botão for pressionado
    console.log('Botão pressionado');
  };

  
  return (
    <View style={styles.containerMainApp}>
      <StatusBar style="light"/>
      
      <View style={styles.ContainerLogo}> 

        <Image source={require('./assets/login/logo.png')} style={styles.logoBandMate}/>
      
      </View> 

        <View style={styles.tela1}>

          <View style={styles.containerForms}>

            <View style={styles.topForms}>
              
              <Text style={styles.txtLogin}>login</Text>
              <Text style={styles.txtContinue}>Sign in to continue</Text>
              
            </View>

          <View style={styles.mainCampName}> 

              <Text style={styles.txtName}>NOME</Text>

            <View style={styles.containerCampTxt}>

              <TextInput style={styles.txtCamp} placeholder='Band Mate' />
            
            </View>
          
          </View>
          
          
            <View style={styles.containerCampPwd}>

            <TextInput style={styles.txtCamp } placeholder='*******' secureTextEntry={true}/>
            </View>

            <View style={styles.containerButtons}>

            <View style={styles.googleButton}>
            <TouchableOpacity onPress={handlePress} style={styles.button}>
            <Image source={require('./assets/login/logoGoogle.png')} style={styles.googleImage} />
            </TouchableOpacity>
            
            </View>


              <View style={styles.enterButton}>
                <View>
                  <Text style={styles.enterTxt}>Log In</Text>
                </View>
              </View>
            </View>

           
            
            

          </View>

          
        </View> 
    
    </View>

  )
}