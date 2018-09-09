import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAWd7PoHt7ttjCnzNc0DQKK5arvYdPAO34',
            authDomain: 'authentication-81d0e.firebaseapp.com',
            databaseURL: 'https://authentication-81d0e.firebaseio.com',
            projectId: 'authentication-81d0e',
            storageBucket: 'authentication-81d0e.appspot.com',
            messagingSenderId: '297962294540'
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;