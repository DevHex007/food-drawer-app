import React from 'react';
import {
    View,
    Text
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
    TextButton,
    TextIconButton
} from '../../components'
import{
    OnBoarding
}from './'
import OTPInputView from "@twotalltotems/react-native-otp-input"

const Otp = ({ navigation }) => {

    const [timer, setTimer] = React.useState(30)

    React.useEffect(() => {
        let interval = setInterval(() => {
            setTimer(prevTimer => {
                if(prevTimer > 0) {
                    return prevTimer -1
                } else {
                    return prevTimer
                }
            })
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return ( 
        <AuthLayout
            title="OTP Authentication"
            subtitle="An Authentication code as been sent to olahex@gmail.com"
            titleContainerStyle={{
                marginTop: SIZES.padding * 2
            }}
        >   
            {/** OPT Input */}
            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.padding * 2
                }}
            >
                <OTPInputView
                    pinCount={4}
                    style={{
                        width: "100%",
                        height: 50
                    }}
                    codeInputFieldStyle={{
                        width: 65,
                        height: 65,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.lightGray2,
                        color: COLORS.black,
                        ...FONTS.h3
                    }}
                    onCodeFilled={(code) => {
                        console.log(code)
                    }}
                />

                {/** Countdown Timer */}
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: SIZES.padding
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.darkGray,
                            ...FONTS.body3
                        }}
                    >
                        Didn't receive code?
                    </Text>
                    <TextButton
                        label={`Resend (${timer}s)`}
                        disabled={timer == 0 ? false : true}
                        buttonContainerStyle={{
                            marginLeft: SIZES.base,
                            backgroundColor: null
                        }}
                        labelStyle={{
                            color: COLORS.primary,
                            ...FONTS.h3
                        }}
                        onPress={() => setTimer(30)}//initially: 60s
                    />
                </View>
            </View>

            {/** Footer */}
            <View>
                <TextButton
                    label="Continue"
                    buttonContainerStyle={{
                        height: 50,
                        alignItems: 'center',
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.primary
                    }}
                    //onPress={() => console.log("Continue")}
                    onPress={() => navigation.navigate('Home')}
                />
                <View
                    style={{
                        marginTop: SIZES.padding,
                        alignItems: 'center'
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.darkGray,
                            ...FONTS.body3
                        }}
                    >
                        By signing up, you agree to our
                    </Text>
                    <TextButton
                        label="Terms and Condition"
                        buttonContainerStyle={{
                            backgroundColor: null
                        }}
                        labelStyle={{
                            color: COLORS.primary,
                            ...FONTS.body3
                        }}
                        onPress={() => console.log("TnC")}
                    />
                </View>
            </View>
        </AuthLayout>
    )
}

export default Otp;