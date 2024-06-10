import { StatusBar } from 'expo-status-bar';
import { Button, Image, ImageBackgroundBase, Touch, KeyboardAvoidingView,TouchableOpacity, Linking, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, } from 'react-native';
import { Platform } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';


export default function PasswordScreen() {

  const navigation = useNavigation();

  const handlePress = () => {
    // Lógica a ser executada quando o botão for pressionado
    console.log('Botão pressionado');

  };

  return (
    <View style={styles.containerGroup}>

        <View containerTop>

            <TouchableOpacity style={styles.containerBtBackScreen} onPress={() => navigation.navigate("Home")}>
                <Image source={require('../../assets/account/back.png')} style={styles.backScreen}/>
            </TouchableOpacity>  

            <Image source={require('../../assets/account/logo.png')} style={styles.imgLogo}/>

        </View>

        <View style={styles.mainCampEmail}> 

                <Text style={styles.txtEmail}>DIGITE SEU EMAIL PARA RECUPERAÇÃO</Text>

            <View style={styles.containerCampTxt}>

                <TextInput style={styles.txtCampEmail} placeholder='bandmate@gmail.com' inputMode='Email' maxLength={6}  />
            
            </View>

        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Code")} style={styles.buttonConfirme}>

            <Text style={styles.txtBtConfirme}>Confirmar</Text>

        </TouchableOpacity>

    </View>
  );
}

