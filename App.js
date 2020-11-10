import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import { applyMiddleware , createStore } from 'redux'
import { Provider  } from 'react-redux'
import Thunk from 'redux-thunk';
import reducers from './store/reducers'


import StartGame from './screens/StartGame'
import Game from './screens/Game'
import Thanks from './screens/ThankYouPage'

const AppNavigator = createStackNavigator({
  Home : StartGame,
  Game : Game,
  Finish : Thanks
});

const Container = createAppContainer(AppNavigator)


export default function App() {
  return (
      <Provider store={ createStore(reducers , {} , applyMiddleware(Thunk)) }>
        <Container/>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
