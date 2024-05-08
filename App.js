import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackgroundBase, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, } from 'react-native';
import { useState } from 'react';
import styles from './style';
import CampPwd from './defaultConfigs'
import CampTxt from './defaultConfigs'


export default function App() {

  
  return (
    <View style={styles.containerMainApp}>
      <StatusBar style="light"/>
      
      <View style={styles.ContainerLogo}> 

        <Image source={require('./assets/login/logo.png')} style={styles.logoBandMate}/>
      
      </View> 

        <View style={styles.tela1}>

          <View style={styles.containerForms}>

            <View>
              <Text style={styles.txtLogin}>login</Text>
            </View>

            <CampTxt>Band Mate</CampTxt>

            <CampPwd style={styles.campPwd}>******</CampPwd>

            

          </View>

          
        </View> 
    
    </View>

  );
}