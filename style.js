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
      height: '100%',
      top: '5%',
      borderTopLeftRadius: 80,
      borderTopRightRadius: 80,
      alignItems: 'center',
    },
  
    txtLogin:{
      color: '#000',
      fontSize: 56,
      top: '30%'
    },
  
    campPwd:{
        top: '13%'
    }
  
  
  
  });

export default styles;