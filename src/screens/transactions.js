import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { FloatingAction } from "react-native-floating-action";
import { observer } from 'mobx-react';
import TransactionsStore from '../store/transactionsStore'
import Transaction from '../components/transaction';

const styles = StyleSheet.create(
    {
        list: {
            flex: 3,
            paddingTop: 20,
        },
        counterContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: '5%',
            paddingRight: '5%',
            backgroundColor: '#7FACCD',
        },
        counter: {
            width: '25%',
            flex: 1,
        },
        counterText: {
            fontSize: 40,
            textAlign: 'center',
        },
        counterLabel: {
            fontSize: 20,
            fontWeight: '100',
            color: '#fff',
            textAlign: 'center',
            paddingTop: 0,
        },
        container: {
            paddingTop: 0,
            flex: 1,
            backgroundColor: '#EEEEEC',
            borderRadius: 5,
    
        },
    }
    
    
)

@observer
export default class Transactions extends Component {

    actions = [
        {
            text: "Add Transaction",
            icon: require("../../assets/addIcon.png"),
            name: "AddTransaction",
            position: 1,
            color: '#7FACCD'
        },
        {
            text: "Reports",
            icon: require("../../assets/reportsIcon.png"),
            name: "Reports",
            position: 2,
            color: '#7FACCD'
        },
    ]

    handleAddTransaction = () => {
        this.props.navigation.navigate('AddTransaction')
    }

    render() {
        const { transactions, addTransaction, getCount, getReport, balance } = TransactionsStore
        return [
            <View key='flatlist'
                style={styles.container}
            >
                
                <View style={styles.counterContainer}>
                <View
                    style={styles.counter}
                >
                    <Text style={styles.counterText}>{balance}</Text>
                    <Text style={styles.counterLabel}>Balance</Text>
                </View>
                </View>
                <Text style={[styles.counterLabel,{color:'#000', paddingTop:20, fontSize:35}]}>Transacciones</Text>
                <FlatList
                style={styles.list}
                data={transactions}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return (<Transaction key={item.id} transaction={item} />)
                }}
            />
            </View>
            ,
            <FloatingAction
                actions={this.actions}
                color='#7FACCD'
                key='floatingActionButtons'
                onPressItem={name => {
                    this.props.navigation.navigate(name)
                }}
            />,



        ]
    }

}