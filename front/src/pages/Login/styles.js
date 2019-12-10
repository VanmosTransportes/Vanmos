import {  StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#ffc107",
    alignItems: 'center',
    justifyContent: 'center',
  },
  Content: {
    marginTop: 250,
    width: 300,
    alignSelf: 'center'
  },
  ItemInput: {
    borderBottomColor: "black",
    width: "90%",
  },
  LabelInput: {
    color: "#000",
    top:-1
  },
  RegisterText: {
    marginTop: 20,
    alignSelf: 'center'
  },
  Login: {
    marginTop: 20, 
    backgroundColor: '#F49D05', 
    borderRadius: 25
  }, 
  ItemPicker:{
    borderBottomColor: "black", 
    marginTop: 15, 
    width: "90%", 
    marginLeft: 15
  }
})

export default styles