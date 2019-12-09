import React, { Component } from 'react'
import {  StyleSheet } from 'react-native'

import { AppStyles } from '../AppStyles'

const styles = StyleSheet.create({
    ItemInput: {
        borderBottomColor: "black",
        width: "90%"
    },
    LabelInput: {
        color: "#000",
        top:-1
    },
    ButtonMain: {
        margin: 15,
        marginTop: 50, 
        backgroundColor: '#F49D05', 
        borderRadius: 25, 
        width: AppStyles.buttonWidth.main, 
        marginLeft: 55

    }, 
    ItemPicker:{
        borderBottomColor: "black", 
        marginTop: 15, 
        width: "90%", 
        marginLeft: 15
    }

})

export default styles