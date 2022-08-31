import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import SplashScreen from 'react-native-splash-screen'

import CustomDrawer from './navigation/CustomDrawer';

import { createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import thunk from "redux-thunk";
import rootReducers from "./stores/rootReducers";

import {
    OnBoarding,

    SignIn,
    SignUp,
    ForgotPassword,
    Otp,
    FoodDetail,

    Checkout,
    MyCart,
    Success,

    AddCard,
    MyCard,

    DeliveryStatus,
    Map
} from './screens'

const Stack = createStackNavigator();

/*
AIzaSyD26EEEfmz4KTS-2k1f-xXdNKCF9Laf9Lw
*/

const store = createStore(
    rootReducers,
    applyMiddleware(thunk)
)

const App = () => {

   React.useEffect(() => {
        SplashScreen.hide();
    }, [])
  

    return (
        <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Home'}
            >
         <Stack.Screen
            name="Home"
            component={CustomDrawer}
        />
        <Stack.Screen
            name="OnBoarding"
            component={OnBoarding}
        />

        <Stack.Screen
            name="SignIn"
            component={SignIn}
        />

        <Stack.Screen
            name="SignUp"
            component={SignUp}
        />

        <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
        />

        <Stack.Screen
            name="Otp"
            component={Otp}
        />
        <Stack.Screen
            name="FoodDetail"
            component={FoodDetail}
        />

        <Stack.Screen
            name="Checkout"
            component={Checkout}
        />

        <Stack.Screen
            name="MyCart"
            component={MyCart}
        />

        <Stack.Screen
            name="Success"
            component={Success}
            options={{gestureEnabled: false}}
        />

        <Stack.Screen
            name="AddCard"
            component={AddCard}
        />

        <Stack.Screen
            name="MyCard"
            component={MyCard}
        />

        <Stack.Screen
            name="DeliveryStatus"
            component={DeliveryStatus}
            options={{gestureEnabled: false}}
        />

        <Stack.Screen
            name="Map"
            component={Map}
        />
            </Stack.Navigator>
        </NavigationContainer>
    </Provider> 
    )
}

export default App;