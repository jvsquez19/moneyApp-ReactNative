import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TransactionStore from '../store/transactionsStore';

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 10,
        paddingTop: 10,
        paddingBottom: 20,
        margin: 10,
        marginTop: 5,
        marginBottom: 5, 
     },
     cardHeader: {
        flex: 1,
        flexDirection: 'row',
      },
      counterContainer: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: '5%',
        paddingRight: '5%',
      },
      counter: {
        width: '25%',
        flex: 2,
      },
      counterText: {
        fontSize: 20,
        textAlign: 'center',
      },
      counterLabel: {
        fontSize: 20,
        fontWeight: '100',
        color: '#a3a3a3',
        textAlign: 'center',
        paddingTop: 0,
      },

})

const Reports = ({})=>{
    const {totalIncome, totalExpenses, balance} = TransactionStore
    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
            <Text style={[styles.counterLabel,{color:'#000', paddingTop:20, fontSize:35}]}>Reportes</Text>
            </View>
            <View style={styles.counterContainer}>
                <View
                    style={styles.counter}
                >
                    <Text style={styles.counterText}>{totalIncome}</Text>
                    <Text style={styles.counterLabel}>Income</Text>
                </View>
                <View
                    style={styles.counter}
                >
                    <Text style={styles.counterText}>{totalExpenses}</Text>
                    <Text style={styles.counterLabel}>Expenses</Text>
                </View>
                <View
                    style={styles.counter}
                >
                    <Text style={styles.counterText}>{balance}</Text>
                    <Text style={styles.counterLabel}>Balance</Text>
                </View>
                </View>
        </View>
    )
}

export default Reports;