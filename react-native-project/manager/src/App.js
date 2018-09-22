import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';
class App extends Component {
  componentWillMount() {
    const config = {
   apiKey: 'AIzaSyDsfnaZJakfDB8eQwGmMePpG7IHixPl72Q',
   authDomain: 'manager-ab460.firebaseapp.com',
   databaseURL: 'https://manager-ab460.firebaseio.com',
   projectId: 'manager-ab460',
   storageBucket: 'manager-ab460.appspot.com',
   messagingSenderId: '1035361482517'
 };
 firebase.initializeApp(config);
  }
    render() {
      const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
