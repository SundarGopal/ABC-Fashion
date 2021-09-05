
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({

  searchpageSection: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f2f3',
    borderRadius: 20,

    height: "90%",

  },
  searchpageIcon: {
    padding: 10,
  },
  searchpageinput: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#f1f2f3',

    borderRadius: 20,
    color: '#515c6f',
    width: "50%"
  },
  Cartmaincontainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  CartbuttonContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: "#FF6969",

    borderBottomEndRadius: 200,
    borderBottomLeftRadius: 200,
    borderTopEndRadius: 200,
    borderTopLeftRadius: 200,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: "#FFFFFF",
    height: 30,
    width: 150,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,

    
  },

  // CartloginButton: {
  //   backgroundColor: '#FF6969',
  //   fontWeight: '800',
  // },
 
  // Cartdetails: {
  //   fontSize: 20,
  //   fontFamily: 'Montserrat-ExtraLight',
  // },
  CartsubmitButton: {
    position: 'absolute',
    height: 45,
    bottom: 10,
    left: 220,
  },
  
  CartforTotal: {
    position: 'absolute',
    bottom: 80,
    left: 10,
    fontSize: 10,
  },
  CartforTotal1: {
    position: 'absolute',
    bottom: 40,
    left: 10,
    fontSize: 30,
  },
  CartforTotal2: {
    position: 'absolute',
    bottom: 20,
    left: 10,
    fontSize: 15,
  },
  // cartheading: {
  //   marginTop: 50,
  //   paddingLeft: 20,
  //   fontSize: 30,
  //   fontWeight: '300',
  // },

  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  view: {
    paddingTop: 50
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f5f6f8',
    marginTop: "30%",

  },
  LatestContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  LatestTextStyle: {
    fontSize: 32,
    marginLeft: 20

  },
  OrderPlacedLogo: {
    marginBottom: 50,
    height: "50%",
    width: "50%"
  },
  OrderPlacedButton: {
    backgroundColor: "#FF6969"
  },
  imageBackground: {
    flex: 5,
    justifyContent: "center",
    height: "1000%",
    resizeMode: 'cover'
  },
  LoginUpContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',

    borderBottomEndRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopEndRadius: 30,
    borderTopLeftRadius: 30,

    borderBottomWidth: 1,
    width: "80%",
    height: "8%",

    flexDirection: 'row',
    alignItems: 'center',
    borderColor: "#FFFFFF"
  },
  LoginDownContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',

    borderBottomEndRadius: 30,
    borderBottomLeftRadius: 30,
    borderTopEndRadius: 0,
    borderTopLeftRadius: 0,

    borderBottomWidth: 1,
    width: "80%",
    height: "8%",
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: "#FFFFFF"
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center'
  },
  categoryIcon: {
    width: 80,
    height: 80,
    marginLeft: 15,
    justifyContent: 'center'
  },
  categoryText: {
    marginLeft: 20,
    fontSize: 20,
    justifyContent: 'center'
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: "80%",
    borderRadius: 30,
  },
  LoginLogo: {
    marginBottom: 40
  },
  loginButton: {
    backgroundColor: "#FF6969"

  },
  loginText: {
    color: 'white',
    fontSize: 20


  },
  addcustomerlink: {

    color: '#FF6969'

  },
  spacebetweenloginarrow: {
    paddingLeft: 30
  },
  card: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white'
  }



});


export default styles;