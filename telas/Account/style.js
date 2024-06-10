import { Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containerMain: {
      backgroundColor: '#1C2120',
      width: '100%',
      alignItems: 'center',
      flex: 1
    },

    
    containerTop:{
      alignItems: 'center',
    },
    
    imgLogo:{
      width: 240,
      height: 80,
      top: '30%'
    },
    
    containerBtBackScreen:{
      top: '55%',
        right: '5%'
      },
      
    backScreen:{
      width: 20,
      height: 25,
      top: '90%',
      right: '10%',
    },
    
    backgroundForms:{
      backgroundColor: '#fff',
      width: '100%',
      height: '80%',
      top: '10%',
      borderTopLeftRadius: 80,
      borderTopRightRadius: 80,
      alignItems: 'center',
    },
    
    ScreenRoll:{
      width: '100%',
    },

    containerForms:{
      width: '100%',
      height: 500,
      borderTopLeftRadius: 80,
      borderTopRightRadius: 80,
      alignItems: 'center', 
    },

    topForms:{
        alignItems: 'center',
        top: '8%',
        flexDirection: 'column',
        alignContent: 'flex-start'
        
    },

    txtAccount:{
        textAlign: 'center',
        fontSize: 40,
        maxWidth: '70%',
        bottom: '15%',
        padding: 10,
    },

    mainCampName:{
        width: '100%',
        alignItems: 'center',
      },
  
      txtName:{
        color: '#8F8E8E',
        right: '23%',
        top: '15%'
      },
    
      containerCampTxt: {
        backgroundColor: '#8F8E8E',
        width: '60%',
        borderRadius: 15,
        top: '15%',
        padding: 10,
        opacity: 0.35,
        alignContent: 'flex-start',
      },

      mainCampEmail:{
        width: '100%',
        alignItems: 'center',
        paddingTop: '10%'
      },

      txtEmail:{
        color: '#8F8E8E',
        right: '23%',
        top: '15%'
      },

      containerCampEmail:{
        backgroundColor: '#8F8E8E',
        width: '60%',
        borderRadius: 15,
        top: '15%',
        padding: 10,
        opacity: 0.35,
        alignContent: 'flex-start',
      },
  
      mainCampPwd:{
        width: '100%',
        alignItems: 'center',
        paddingTop: '2%'
      },
  
      txtPwd:{
        color: '#8F8E8E',
        right:'23%',
        top: '20%'
      },

      containerCampPwd: {
        backgroundColor: '#8F8E8E',
        width: '60%',
        borderRadius: 15,
        top: '20%',
        padding: 5,
        opacity: 0.35,
        alignContent: 'flex-start',
      },
      
      txtCampPwd: {
        padding: 5,
        paddingLeft: 15
      },

      BtSignUp:{
        backgroundColor: '#000',
        width: '60%',
        borderRadius: 12,
        top: '8%',
        padding: 10,
        alignItems: 'center'
      },

      txtCadastre:{
        color: '#fff',
        fontSize: 20
      }






});

export default styles;
