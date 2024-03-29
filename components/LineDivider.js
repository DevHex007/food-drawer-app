import React from 'react'
import {
    View
} from 'react-native'
import{
    COLORS
}from '../constants'

const LineDivider = ({lineStyle}) => {
  return (
    <View
        style={{
            height: 3, //initially 2
            width: "100%",
            backgroundColor: COLORS.lightGray2,
            ...lineStyle
        }}
    >

    </View>

  )
}

export default LineDivider
