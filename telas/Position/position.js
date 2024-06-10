import { StatusBar } from 'expo-status-bar';
import { Button, Image, KeyboardAvoidingView, TouchableOpacity, Linking, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, } from 'react-native';
import { Platform } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import React from 'react';

export default function PositionScreen() {

  const navigation = useNavigation();

  const options = [
    { name: 'Guitarra', icon: require('../../assets/New Groups/Icons/guitar.png') },
    { name: 'Baixo', icon: require('../../assets/New Groups/Icons/Bass.png') },
    { name: 'Violão', icon: require('../../assets/New Groups/Icons/ac.png') },
    { name: 'Teclado', icon: require('../../assets/New Groups/Icons/key.png') },
    { name: 'Bateria', icon: require('../../assets/New Groups/Icons/drum.png') },
    { name: 'Vocal lead', icon: require('../../assets/New Groups/Icons/vocalLead.png') },
    { name: 'Back vocal', icon: require('../../assets/New Groups/Icons/backVox.png') },
    { name: 'Mixagem', icon: require('../../assets/New Groups/Icons/mix.png') },
    { name: 'Transmissão', icon: require('../../assets/New Groups/Icons/streaming.png') },
    { name: 'Direção', icon: require('../../assets/New Groups/Icons/director.png') },
    { name: 'Fotografia', icon: require('../../assets/New Groups/Icons/cam.png') },
    { name: 'Projeção', icon: require('../../assets/New Groups/Icons/projector.png') },
    { name: 'Mainbbnv cs', icon: require('../../assets/New Groups/Icons/more.png') },
    
  ];

  

  return (
    <View style={styles.containerMain}>
      <View style={styles.containerTop}>
        <TouchableOpacity style={styles.containerBtBackScreen} onPress={() => navigation.navigate("Groups")}>
          <Image source={require('../../assets/account/back.png')} style={styles.backScreen} />
        </TouchableOpacity>
        <Image source={require('../../assets/account/logo.png')} style={styles.imgLogo} />

      </View>

      <View style={styles.containerOpitions}>

      <ScrollView style={styles.container}>

        <Text style={styles.title}>Qual(ais) suas posições?</Text>

        <View style={styles.grid}>
          
          {options.map((option, index) => (
            <TouchableOpacity key={index} style={styles.option}>
            
            <View style={styles.BtImgs}>
              <Image source={option.icon} style={styles.icon}  resizeMode='contain'/>
            </View>
              <Text style={styles.optionText}>{option.name}</Text>

            </TouchableOpacity>


          ))}

        </View>

      </ScrollView>
      </View>

    </View>

  );
}