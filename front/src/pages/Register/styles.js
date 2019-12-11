import {  StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#ffc107",
    alignItems: 'center',
    justifyContent: 'center',
  },
  Content: {
    marginTop: 150,
    width: 350,
    alignSelf: 'center'
  },
  ItemInput: {
    borderBottomColor: "black",
  },
  LabelInput: {
    color: "#000",
    top:-1
  },
  RegisterButton: {
    marginTop: 20, 
    backgroundColor: '#F49D05', 
    borderRadius: 25
  }, 
  BackButton: {
    marginTop: 20, 
    backgroundColor: 'grey', 
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