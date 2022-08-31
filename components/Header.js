import React from 'react'
import {
    View,
    Text
} from 'react-native'
import { FONTS } from '../constants'

const Header = ({
    containerStyle,
    title,
    titleStyle, 
    leftComponents, 
    rightComponents
}) => {
  return (
    <View
        style={{
            height: 60,
            flexDirection: 'row',
            ...containerStyle
        }}
    >
        {/** Left */}
        {leftComponents}

        {/** Title */}
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
                
            }}
        >
            <Text
                style={{
                    ...FONTS.h3
                }}
            >
                {title}
            </Text>
        </View>

        {/** Right */}
        {rightComponents}
    </View>
  )
}

export default Header