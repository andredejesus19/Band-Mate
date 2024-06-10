import { Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerMainApp: {
    backgroundColor: '#1C2120',
    width: '100%',
    flex: 1
  },
  
  ContainerLogo:{
    paddingTop: '25%',
    top: '2%',
    alignItems: 'center',
  },
  
  logoBandMate:{
    width: 240,
    height: 80,
  },
  
  
  tela1:{
    backgroundColor: '#fff',
    width: '100%',
    height: '70%',
    top: '8%',
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    alignItems: 'center',
  },
  
  ScreenRoll:{
    width: '100%',
  },
  
    containerForms:{
      width: '100%',
      height: '80%',
      top: '5%',
      borderTopLeftRadius: 80,
      borderTopRightRadius: 80,
      alignItems: 'center',
    },

    topForms:{
      alignItems: 'center',
      top: '4%'
    },

    txtLogin:{
      fontSize: 65,
    },

    txtContinue:{
      color: '#8F8E8E'
    },

    mainCampName:{
      width: '100%',
      alignItems: 'center',
      top: '5%'

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
      padding: 5,
      opacity: 0.35,
      alignContent: 'flex-start',
    },

    mainCampPwd:{
      width: '100%',
      alignItems: 'center',
      paddingTop: '10%'
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
    
    txtCamp: {
      padding: 5,
      paddingLeft: 15
    },
  
    googleButton:{
      backgroundColor: '#8F8E8E',
      width: 335,

    },

    containerButtons:{
      flexDirection: 'row',
      paddingTop: '10%',
      alignContent: 'center',
    },
    
    ButtonGoogle:{
      backgroundColor: '#8F8E8E',
      width: '28%',
      borderRadius: 15,
      padding: 8,
      opacity: 0.35,
      right: '15%',
      alignItems: 'center'
    },

    googleButton:{
      backgroundColor: '#8F8E8E',
      width: '230%',
      borderRadius: 12,
      padding: 8,
      opacity: 0.35,
      right: '75%',
      alignItems: 'center'
    },
    
    googleImage:{
      width: 30,
      height: 30
    },

    ButtonEnter:{
      backgroundColor: '#000',
      width: '28%',
      borderRadius: 12,
      padding: 8,
      left: '75%',
      alignItems: 'center',
      justifyContent:'center'
    },

    enterTxt:{
      color: '#fff',
      fontSize: 18
    },

    ContainerBaseboard:{
      padding: '5%',
      alignItems: 'center',
    },

    txtLost:{
      color: '#8F8E8E'
    },

    TxtCadastre:{
      padding: 5,
      color: '#8F8E8E'
    }


      
  });

export default styles;