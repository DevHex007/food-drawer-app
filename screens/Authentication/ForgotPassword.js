import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import { AuthLayout } from '../'
import {
    FONTS,
    COLORS,
    SIZES,
    icons
}from '../../constants'
import {
    FormInput,
    SwitchCustom,
    TextButton,
    TextIconButton,    
} from '../../components';
import { utils } from '../../utils'

const ForgotPassword = ({ navigation }) => {


    const [email, setEmail] = React.useState("")
    const [emailError, setEmailError] = React.useState("")

    function isEnableSignIn(){
        return (
            email != "" && emailError == ""
        )
    }


    return (
        <AuthLayout
            title="Password Recovery"
            subtitle="Please enter your email address to recover your password"
            titleContainerStyle={{
                marginTop: SIZES.padding * 2
            }}
        >
            {/**Form Input */}
            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.padding * 2
                }}
            >
            <FormInput
                label="Email"
                keyboardType="email-address"
                autoCompleteType="email"
                onChange={(value) => {
                    // validate email
                    utils.validateEmail(value, setEmailError)
                    setEmail(value)
                }}
                errorMsg={emailError}
                appendComponent={
                    <View
                        style={{
                            justifyContent: 'center'
                        }}
                    >
                        <Image
                            source={email == "" || (email != "" && emailError == "") ? icons.correct : icons.cancel}
                            style={{
                                height: 20,
                                width: 20,
                                tintColor: email == "" ? COLORS.gray : (email != "" && emailError == "") ? COLORS.green : COLORS.red
                            }}
                        />
                    </View>
                    }
            />
            </View>
            {/** Button */}
            <TextButton
                label="Send Email"
                disabled={isEnableSignIn() ? false : true}
                buttonContainerStyle={{
                    height: 55,
                    alignItems: 'center',
                    marginTop: SIZES.padding,
                    borderRadius: SIZES.radius,
                    backgroundColor: isEnableSignIn() ? COLORS.primary : COLORS.transparentPrimary
                }}
                onPress={() => navigation.goBack()}
            />
        </AuthLayout>
    )
}

export default ForgotPassword;