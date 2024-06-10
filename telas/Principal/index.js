import { StatusBar } from 'expo-status-bar';
import { Button, Image, ImageBackgroundBase, Touch, KeyboardAvoidingView,TouchableOpacity, Linking, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, ScrollView, } from 'react-native';
import { Platform } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import CampPwd from '../../defaultConfigs';
import CampTxt from '../../defaultConfigs';

export function Principal() {

    const navigation = useNavigation();

  const handlePress = () => {
    // Lógica a ser executada quando o botão for pressionado
    console.log('Botão pressionado');

  };

  return (

    
    <View style={styles.containerMainApp}>
      <StatusBar style="light"/>
      
      <View style={styles.ContainerLogo}> 

        <Image source={require('../../assets/login/logo.png')} style={styles.logoBandMate}/>
      
      </View>  

        <View style={styles.tela1}>

      <ScrollView style={styles.ScreenRoll}>  

          <View style={styles.containerForms}>


            <View style={styles.topForms}>

              <Text style={styles.txtLogin}>Login</Text>
              <Text onPress={() => navigation.navigate("Account")} style={styles.txtContinue} >Sign in to continue</Text>
              
            </View>
            
          <View style={styles.mainCampName}> 

              <Text style={styles.txtName}>Nome</Text>

            <View style={styles.containerCampTxt}>

              <TextInput style={styles.txtCamp} placeholder='Band Mate' inputMode='text' />
            
            </View>
          
          </View>
          
          <View style={styles.mainCampPwd}>
            
          <Text style={styles.txtPwd}>Senha</Text>

            <View style={styles.containerCampPwd}>

            <TextInput style={styles.txtCamp } placeholder='*******' secureTextEntry={true}/>
            </View>

          </View>  

            <View style={styles.containerButtons}>

          
              <TouchableOpacity onPress={handlePress} style={styles.buttonGoogle}>
              <View style={styles.googleButton}>
              <Image source={require('../../assets/login/logoGoogle.png')} style={styles.googleImage} />
    
              </View>
              </TouchableOpacity>


                <TouchableOpacity onPress={handlePress} style={styles.ButtonEnter}>
              <View style={styles.enterButton}>


                  <Text style={styles.enterTxt}>Log In</Text>


              </View>
                </TouchableOpacity>

            </View>
           
            <View style={styles.ContainerBaseboard}>

                <Text onPress={() => navigation.navigate("Password")} style={styles.txtLost}>Esqueceu sua senha?</Text>
                
                <Text onPress={() => navigation.navigate("Account")} style={styles.TxtCadastre}>Cadastre-se</Text>
            
            </View>
            

            

          </View>

  </ScrollView>
        </View> 
    
    </View>


  )
}

