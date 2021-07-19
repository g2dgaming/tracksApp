import React from 'react';
import createDataContext  from './createDataContext';
import tracker from '../api/tracker';
import AsyncStorage from '@react-native-async-storage/async-storage'; //for react-native-cli only
import { navigate } from '../navigationRef';
const authReducer=(state,action)=>{
    switch (action.type) {    
        case 'add_error':
            return {...state,errorMessage:action.payload};
        case 'signup':
            return {errorMessage:'',token:action.payload,isSignedIn:true};   
        case 'signin':
            return {errorMessage:'',token:action.payload,isSignedIn:true};     
        default:
            return state;
    }
};

const signUp=dispatch=> async ({email,password})=>{
        try{
            const response=await tracker.post('/signup',{email,password});
            console.log('Signing up..');
            await AsyncStorage.setItem('token',response.data.token);
            dispatch({type:'signup',payload:response.data.token});
            navigate('TrackList',{test:false});
        }catch(err){
            console.log(err);
            dispatch({type:'add_error',payload:'Something went wrong with sign-up!'});
        }
        //api req to sign up

        //if we sign up, modify state, say that we're authenticated

        // if failing, show error message to user.

    };
const signIn= dispatch =>async ({email,password})=>{
        //try to sign in 
        //handle success by updating state
        //handle failure by showing error message
        try{
            const response=await tracker.post('/signin',{email,password});
            console.log('Signing in..');
            await AsyncStorage.setItem('token',response.data.token);
            dispatch({type:'signin',payload:response.data.token});
            navigate('TrackList',{test:false});
        }catch(err){
            console.log(err);
            dispatch({type:'add_error',payload:'Something went wrong with sign-up!'});
        }
    };
const signOut=(dispatch)=>{
    return ()=>{
        //update state
    }
};
export const {Provider,Context}=createDataContext(authReducer,{signIn,signUp,signOut},{token:null,errorMessage:''});