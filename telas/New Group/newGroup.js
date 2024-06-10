import { StatusBar } from 'expo-status-bar';
import { Button, Image, ImageBackgroundBase, Touch, KeyboardAvoidingView,TouchableOpacity, Linking, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, ScrollView, } from 'react-native';
import { Platform } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';


export default function NewGroupScreen() {

  const navigation = useNavigation();

  const handlePress = () => {
    // Lógica a ser executada quando o botão for pressionado
    console.log('Botão pressionado');

  };

  return (
    <View style={styles.containerMain}>

        <View containerTop>

            <TouchableOpacity style={styles.containerBtBackScreen} onPress={() => navigation.navigate("Account")}>
                <Image source={require('../../assets/account/back.png')} style={styles.backScreen}/>
            </TouchableOpacity>  

            <Image source={require('../../assets/account/logo.png')} style={styles.imgLogo}/>

        </View>

      <ScrollView style={styles.ScreenRoll}>

      <View style={styles.containerForm}>
        
        <View style={styles.containerIconUser}>

           <Image source={require('../../assets/New Groups/iconUser.png')} style={styles.imgUser}/>

        </View>

        <View style={styles.containerCampTxt}>

            <TextInput style={styles.txtCampNameGroup} placeholder='Band Mate' inputMode='text'/>

        </View>

        <Text style={styles.txtAddImg}>Adicione uma imagem e um nome ao grupo</Text>

        <TouchableOpacity style={styles.containerNext} onPress={() => navigation.navigate("Position")}>

            <Text style={styles.txtConcluir}>Concluir</Text>

        </TouchableOpacity>

      </View>

       </ScrollView>

    </View>
  );
}

