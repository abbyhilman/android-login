import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  //state = { loggedIn: null };

  componentDidMount() {
    firebase.initializeApp({
      apiKey: "your api key",
      authDomain: "your auth domain",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: "",
      appId: "",
      measurementId: ""
    });

    /*firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });*/
  }

  /*renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>
                Log Out
              </Button>
            </CardSection>
          </Card>

        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }{this.renderContent()}*/

  render() {
    return (
      <View>
        <Header headerText="Login" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
