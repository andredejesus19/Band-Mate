import { Button, StyleSheet, } from 'react-native';

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

    ScreenRoll:{
        width: '100%',
    },

    containerForm:{
    width: '100%',
      height: 500,
      borderTopLeftRadius: 80,
      borderTopRightRadius: 80,
      alignItems: 'center',
    },

    containerIconUser:{
        borderColor: '#fff',
        borderWidth: 6,
        width: 150,
        height: 150,
        borderRadius: 200,
        alignItems: 'center',
        justifyContent: 'center',
        top: '20%'
    },

    imgUser:{
        width: '50%',
        height: '60%'

    },

    containerCampTxt: {
        backgroundColor: '#fff',
        width: '60%',
        borderRadius: 15,
        padding: 10,
        alignContent: 'flex-start',
        top: '23%',
        alignItems: 'center'
    },

    txtCampNameGroup:{
        fontSize: 15,
    },

    txtAddImg:{
        color: '#fff',
        fontSize: 15,
        top: '25%'
    },

    containerNext:{
        backgroundColor: '#8F8E8E',
        width: '40%',
        borderRadius: 12,
        top: '27%',
        padding: 10,
        alignItems: 'center'
    },

    txtConcluir:{
        color: '#fff'
    },


});

export default styles;
