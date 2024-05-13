import React from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';

const CampTxt = ({ children, style }) => {
    return (
        <View style={[styles.containerCampTxt, style]}>
            <TextInput style={styles.txtCampText } placeholder={children} />
        </View>
    );
};

const CampPwd = ({ children, style }) => {
    return (
        <View style={[styles.containerCampPwd, style]}>
            <TextInput style={styles.txtCamp } placeholder={children} secureTextEntry={true}/>
        </View>
    );
};


const styles = StyleSheet.create({
    containerCampPwd: {
      backgroundColor: '#8F8E8E',
      width: '60%',
      borderRadius: 15,
      top: '10%',
      padding: 5,
      opacity: 0.35,
      alignContent: 'flex-start',
    },
    
    txtCamp: {
        padding: 5,
      paddingLeft: 15
    }



});



export default CampPwd;
