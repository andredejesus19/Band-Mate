import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackgroundBase, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { useState } from 'react';
import styles from './style';
export default function App() {

  
  return (
    <View style={styles.container}>
    <StatusBar style="light"/>
      

      <View style={styles.top}> 

        <Image source={require(`./assets/login/logo.png`)} style={styles.logoBandMate}/>
      
      </View> 
      <View style={styles.forms}>

        <View>
          <Text style={styles.txtLogin}>login</Text>
        </View>

          <View style={styles.inputUser}>

            <TextInput style={styles.txtUser} placeholder='Band Mate' />

          </View>

      </View>

    </View> 
    

  );
}