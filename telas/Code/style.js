import { Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    containerGroup: {
        backgroundColor: '#1C2120',
        alignItems: 'center',
        flex: 1,
        alignContent: 'flex-start'
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

    mainCampCode:{
        width: '100%',
        alignItems: 'center',
        top: '30%'
    },
  
      txtCode:{
        color: '#fff',
        alignContent: 'center',
        paddingBottom: 8,
        fontSize: 18
    },
    
    containerCampTxt: {
        backgroundColor: '#fff',
        width: '60%',
        borderRadius: 15,
        padding: 10,
        alignContent: 'flex-start',
    },

    txtCampCode:{
        opacity: 0.5,
        fontSize: 20,
        textAlign: `center`
    },

    buttonNewGroup:{
        backgroundColor: '#8F8E8E',
        width: '40%',
        borderRadius: 12,
        top: '32%',
        padding: 10,
        alignItems: 'center'
    },

    txtBtNewGroup:{
        color: '#fff'
    }

});

export default styles;
