import { StyleSheet } from 'react-native';

import { color } from '../components/colors'

export const styles = StyleSheet.create({

  container: {

    display: 'flex',
    alignItems: 'center',
    //justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: color.white

  },

  header: {

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width: '100%',
    backgroundColor: color.blue,

  },

  headerText: {

    color: color.white,
    marginTop: '10%',
    fontSize: 20,

  },

  scanner: {
    alignSelf: "center",
    alignItems: "center",
    height: 200,
    width: "90%",
    overflow: "hidden",
    borderRadius: 10,
    marginTop: "5%"
  },

  labelQtd: {
    backgroundColor: color.gray_primary,
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 50,
    width: "90%",
    marginTop: "5%"
  },

  btn: {
    backgroundColor: color.blue,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: 60,
    marginTop: "5%",
    borderRadius: 10,
  },

  code: {

    backgroundColor: color.blue,

  },

  noCode: {

    backgroundColor: color.red,

  },

  button: {
    backgroundColor: color.blue,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },

  code: {

    backgroundColor: color.gray,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
    width: "90%",
    height: 60,
    borderRadius: 10,
    paddingHorizontal: 10,

  },

  textCode: {

    color: color.white,
    fontSize: 20

  }

/*  buttonText: {
    fontSize: 16,
    //fontFamily: "Poppins_400Regular",
    color: color.White
  },*/

})
