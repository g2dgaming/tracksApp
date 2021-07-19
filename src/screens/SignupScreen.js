import React,{useState,useContext} from 'react';
import { View,StyleSheet,SafeAreaView,TouchableOpacity } from 'react-native';
import {Text,Input,Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
const SignupScreen= ({navigation})=>{
    const {state,signUp} =useContext(AuthContext);
    return  <>
        <AuthForm method="Sign Up" errorMessage={state.errorMessage} onSubmit={signUp} navigation/>  
        <TouchableOpacity onPress={()=>{
            navigation.navigate('Signin');
        }}>
            <Text style={styles.link}> Have A Account?</Text>
        </TouchableOpacity>
        </>      
};
SignupScreen.navigationOptions=()=>{
    return {
        headerShown:false
    };
}
const styles=StyleSheet.create({
   link:{
       color:'blue',
   }
});
export default SignupScreen;