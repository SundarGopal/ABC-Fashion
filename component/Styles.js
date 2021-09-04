
import {StyleSheet} from "react-native"

const styles = StyleSheet.create({

      
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
    view:{
      paddingTop:50
    },
    container: {
      flex:1,
       alignItems: 'center',
      backgroundColor: '#f5f6f8',
      marginTop: "30%",
      
  },
  LatestContainer:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  LatestTextStyle:{
    fontSize:32,
    marginLeft:20
   
  },
  OrderPlacedLogo:{
    marginBottom:50,
    height:"50%",
    width:"50%"
  },
  OrderPlacedButton:{
    backgroundColor: "#FF6969"
  },
  imageBackground:{
    flex: 5,
    justifyContent: "center",
    height:"1000%",
    resizeMode:'cover'
  },
  LoginUpContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
     
      borderBottomEndRadius:0,
      borderBottomLeftRadius:0,
      borderTopEndRadius:30,
      borderTopLeftRadius:30,

      borderBottomWidth: 1,
      width: "80%",
      height: "8%",
      
      flexDirection: 'row',
      alignItems: 'center',
      borderColor:"#FFFFFF"
  },
  LoginDownContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',

    borderBottomEndRadius:30,
    borderBottomLeftRadius:30,
    borderTopEndRadius:0,
    borderTopLeftRadius:0,
    
    borderBottomWidth: 1,
    width: "80%",
    height: "8%",
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor:"#FFFFFF"
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
  categoryIcon:{
    width :80, 
    height:80, 
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
  LoginLogo:{
    marginBottom:40
  },
  loginButton: {
      backgroundColor: "#FF6969",
      
  },
  loginText: {
      color: 'white',
      fontSize:20,
     
      
  },
  addcustomerlink:{

    color:'#FF6969'

  },
  spacebetweenloginarrow:{
    paddingLeft:30
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