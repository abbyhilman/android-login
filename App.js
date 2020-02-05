import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentDidMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDV3ezfupV-8JTp1dYst0uUr2rLa3hyVPc",
      authDomain: "login-17bf8.firebaseapp.com",
      databaseURL: "https://login-17bf8.firebaseio.com",
      projectId: "login-17bf8",
      storageBucket: "login-17bf8.appspot.com",
      messagingSenderId: "240254838381",
      appId: "1:240254838381:web:59680657b29a28f257c164",
      measurementId: "G-Q0ZDZ18N6T"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
