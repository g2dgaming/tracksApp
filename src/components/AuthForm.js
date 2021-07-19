import React,{useState,useContext} from 'react';
import { View,StyleSheet } from 'react-native';
import {Text,Input,Button} from 'react-native-elements';
import Spacer from './Spacer';
import {Context as AuthContext} from '../context/AuthContext';

const AuthForm=({navigation,method,errorMessage,onSubmit})=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    return <View style={styles.container}>
    <Spacer>
        <Text h3>
            {`${method} for trackers`}
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
    {errorMessage?<Text styles={{margin:15,color:'red'}}>{errorMessage}</Text>:null}
    <Spacer>
    <Button title={method} onPress={()=>onSubmit({email,password})}/>
    </Spacer>
    </View>
    
}
const styles=StyleSheet.create({
    container:{
        flex:0,
        borderColor:'red',
        marginTop:30,
        justifyContent:'center',
    }
});
export default AuthForm;