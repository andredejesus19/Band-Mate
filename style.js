import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containerMainApp: {
      backgroundColor: '#1C2120',
      alignItems: 'center',
      flex: 1,
      alignContent: 'flex-start'
    },
  
    ContainerLogo:{
      paddingTop: '25%',
      top: '5%',
      alignItems: 'center',
    },
  
    logoBandMate:{
      width: 300,
      height: 100,
    
    },

    tela1:{
        width: '100%',
        height: '100%'
    },
  
    containerForms:{
      backgroundColor: '#fff',
      width: '100%',
      height: '60%',
      top: '20%',
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
      top: '10%'

    },

    txtName:{
      color: '#8F8E8E',
      right: '23%'
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
    },

    googleButton:{
      backgroundColor: '#8F8E8E',
      width: '28%',
      borderRadius: 15,
      top: '30%',
      padding: 8,
      opacity: 0.35,
      right: '15%',
      alignItems: 'center'
    },
    
    googleImage:{
      width: 30,
      height: 30
    },

    enterButton:{
      backgroundColor: '#1C2120',
      width: '28%',
      borderRadius: 15,
      top: '30%',
      padding: 5,
      left: '15%',
      justifyContent: 'center',
      alignItems: 'center'
    },

    enterTxt:{
      color: '#fff',
      fontSize: 18
    }


      
  });

export default styles;