import { StatusBar } from 'expo-status-bar';
import { Button, Image, ImageBackgroundBase, Touch, KeyboardAvoidingView,TouchableOpacity, Linking, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, } from 'react-native';
import { Platform } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';


export default function GroupsScreen() {

  const navigation = useNavigation();

  const handlePress = () => {
    // Lógica a ser executada quando o botão for pressionado
    console.log('Botão pressionado');

  };

  return (
    <View style={styles.containerGroup}>

        <View containerTop>

            <TouchableOpacity style={styles.containerBtBackScreen} onPress={() => navigation.navigate("Account")}>
                <Image source={require('../../assets/account/back.png')} style={styles.backScreen}/>
            </TouchableOpacity>  

            <Image source={require('../../assets/account/logo.png')} style={styles.imgLogo}/>

        </View>

        <View style={styles.mainCampCode}> 

                <Text style={styles.txtCode}>ENTRE EM UM GRUPO</Text>

            <View style={styles.containerCampTxt}>

                <TextInput style={styles.txtCampCode} placeholder='123-456' inputMode='numeric' maxLength={6}  />
            
            </View>

        </View>

        <TouchableOpacity onPress={() => navigation.navigate("NewGroup")} style={styles.buttonNewGroup}>

            <Text style={styles.txtBtNewGroup}>Criar novo grupo</Text>

        </TouchableOpacity>

    </View>
  );
}

