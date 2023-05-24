import { StyleSheet } from 'react-native';

//import { color } from "../../components/colors.js"

export const styles = StyleSheet.create({

  container: {

    display: 'flex',
    alignItems: 'center',
    //justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: "#E8EEFA"

  },

  header: {

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '20%',
    width: '100%',

  },

  headerText: {

    color: "#E8EEFA",
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
    backgroundColor: "#DCDCDC",
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 50,
    width: "90%",
    marginTop: "5%"
  },

  btn: {
    backgroundColor: "#1151CC",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: 60,
    marginTop: "5%",
    borderRadius: 10,
  },

  code: {

    backgroundColor: "#1151CC",

  },

  noCode: {

    backgroundColor: "#E76B09",

  },

  button: {
    backgroundColor: "#1151CC",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },

  code: {

    backgroundColor: '#767577',
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
    width: "90%",
    height: 60,
    borderRadius: 10,
    paddingHorizontal: 10,

  },

  textCode: {

    color: "#E8EEFA",
    fontSize: 20

  }

/*  buttonText: {
    fontSize: 16,
    //fontFamily: "Poppins_400Regular",
    color: "#E8EEFA"
  },*/

})
