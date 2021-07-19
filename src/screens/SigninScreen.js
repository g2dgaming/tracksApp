import React,{useState,useContext} from 'react';
import { View,StyleSheet,TouchableOpacity } from 'react-native';
import {Text,Input,Button} from 'react-native-elements';
import AuthForm from '../components/AuthForm';
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';

const SigninScreen= ({navigation})=>{
    const {state,signIn} =useContext(AuthContext);
    /*const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    return <View style={styles.container}>
    <Spacer>
        <Text h3>
            Sign-Up for tracker
        </Text> 
    </Spacer> 
    <Input label="Email" 
    onChangeText={setEmail}
    autoCapitalize="none"
    autoCorrect={false}
    /> 
    <Spacer/>
    <Input label="Password"
    secureTextEntry
    onChangeText={setPassword}
    autoCapitalize="none"
    autoCorrect={false}
     />
    {state.errorMessage?<Text styles={{margin:15,color:'red'}}>{state.errorMessage}</Text>:null}
    <Spacer>
    <Button title="Sign-Up" onPress={()=>signUp({email,password})}/>
    </Spacer>
    </View>*/
    return <>
    <AuthForm method="Sign In" errorMessage={state.errorMessage} onSubmit={signIn} navigation/>  
     <TouchableOpacity onPress={()=>{
            navigation.navigate('Signin');
        }}>
            <Text style={styles.link}> Don't Have A Account? Sign Up Now!</Text>
        </TouchableOpacity>
     </>
};
SigninScreen.navigationOptions=()=>{
    return {
        headerShown:false
    };
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        marginBottom:300,
    },
    link:{
        color:'blue',
    }
});
export default SigninScreen;