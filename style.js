import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1C2120',
      alignItems: 'center',
      flexDirection: 'collum',
      alignContent: 'flex-start'
    },
  
    top:{
      paddingTop: '40%',
      alignItems: 'center',
    },
  
    logoBandMate:{
      width: 300,
      height: 100,
    
    },
  
    forms:{
      backgroundColor: '#fff',
      width: '100%',
      height: '100%',
      top: '10%',
      borderTopLeftRadius: 80,
      borderTopRightRadius: 80,
      alignItems: 'center',
      alignContent: `flex-start`
    },
  
    txtLogin:{
      color: '#000',
      fontSize: 56,
      top: '50%'
    },
  
    inputUser:{
      backgroundColor: '#8F8E8E',
      width: '60%',
      borderRadius: 15,
      top: '10%',
      padding: 5,
      opacity: 0.35
    },
  
    txtUser:{
      padding: 5,
      paddingLeft: 15
    },
  
  
  
  });

export default styles;