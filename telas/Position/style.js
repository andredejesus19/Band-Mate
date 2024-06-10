import { Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#1C2120',
    width: '100%',
    alignItems: 'center',
    flex: 1
  },

  imgLogo: {
    width: 240,
    height: 80,
    top: '30%'
  },

  containerBtBackScreen: {
    top: '55%',
    right: '5%'
  },

  backScreen: {
    width: 20,
    height: 25,
    top: '90%',
    right: '10%',
  },

  containerOpitions:{
    width: '100%',
    height: '100%',
    alignItems: 'center',
    top: '8%'
  },

  container: {
    width: '100%',
    bottom: '7%'
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    top: '7%',
    textAlign: 'center'
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    height: 600,
    padding: '3%'

  },

  option: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  BtImgs:{
    width: '80%',
    height: '32%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 3,
    marginTop: 0,
    borderColor: '#fff',
    borderWidth: 4,
    borderRadius: 100,
  },

  Buttons:{
    width: '100%'
  },

  icon: {
    width: '50%',
    height: '50%',
  },

  optionText: {
    color: '#fff',
    marginTop: 0,
    textAlign: 'center',
    fontSize: 13,
  },
});

export default styles;
