import React from 'react';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Transactions from './src/screens/transactions'
import AddTransactionForm from './src/screens/addTransaction'
import Reports from './src/screens/reports'


const MainNavigator = createStackNavigator({
  Transactions: {screen: Transactions, navigationOptions:()=>({title:'Your Transactions'})},
  AddTransaction: {screen: AddTransactionForm, navigationOptions:()=>({title:'Create a new Transaction'})},
  Reports: {screen: Reports, navigationOptions:()=>({title:'Reportes'})}
});

const App = createAppContainer(MainNavigator);

export default App;
