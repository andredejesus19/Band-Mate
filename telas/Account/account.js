import { StatusBar } from 'expo-status-bar';
import { Button, Image, ImageBackgroundBase, Touch, KeyboardAvoidingView,TouchableOpacity, Linking, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, ScrollView, } from 'react-native';
import { Platform } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';


export default function AccountScreen() {

  const navigation = useNavigation();

  const handlePress = () => {
    // Lógica a ser executada quando o botão for pressionado
    console.log('Botão pressionado');

  };

  return (
    <View style={styles.containerMain}>

        <View containerTop>

        <TouchableOpacity style={styles.containerBtBackScreen} onPress={() => navigation.navigate("Home")}>
          <Image source={require('../../assets/account/back.png')} style={styles.backScreen}/>
        </TouchableOpacity>  

          <Image source={require('../../assets/account/logo.png')} style={styles.imgLogo}/>

        </View>

<View style={styles.backgroundForms}>

<ScrollView style={styles.ScreenRoll}>

        <View style={styles.containerForms}>


          <View style={styles.topForms}>

              <Text style={styles.txtAccount}>Crie uma nova conta</Text>
            
          </View>

          <View style={styles.mainCampName}> 

                <Text style={styles.txtName}>Nome</Text>

              <View style={styles.containerCampTxt}>

                <TextInput style={styles.txtCamp} placeholder='Band Mate' inputMode='text'/>
            
            </View>

          </View>  

          <View style={styles.mainCampEmail}> 

                <Text style={styles.txtEmail}>Email</Text>

              <View style={styles.containerCampEmail}>

                <TextInput style={styles.txtCampEmail} placeholder='bandmate@gmail.com' inputMode='email' />
            
              </View>  
          
          </View>
          
          <View style={styles.mainCampPwd}>
            
            <Text style={styles.txtPwd}>Senha</Text>

              <View style={styles.containerCampPwd}>

              <TextInput style={styles.txtCampPwd } placeholder='*******' secureTextEntry={true}/>
              </View>

          </View>  

          <TouchableOpacity onPress={() => navigation.navigate("Groups")} style={styles.BtSignUp}>
          
            <Text style={styles.txtCadastre}>Cadastre-se</Text>

          </TouchableOpacity>


        </View> 


  </ScrollView>

  </View>


  </View>
  );
}

