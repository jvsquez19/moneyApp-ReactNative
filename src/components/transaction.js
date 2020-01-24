import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

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
       borderRadius: 25, 
    },
    cardHeader: {
        flex: 1,
        flexDirection: 'row',
      },
      date: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#000',
        width: '30%',
        textAlign: 'right',
      },
      title: {
        fontSize: 15,
        fontWeight: '300',
        marginLeft: 7,
        textAlign: 'left',
      },
      counterContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: '5%',
        paddingRight: '5%',
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
        fontSize: 13,
        fontWeight: '100',
        color: '#000',
        textAlign: 'center',
        paddingTop: 0,
      },
});

const Transaction = ({transaction})=>{
    const {title, category, amount, type} = transaction
    const bgColor = type === 'ingreso' ? '#7FACCD':'#FC7E81'
    return (
    <View style={styles.card}>
        <View style={styles.cardHeader}>
            <Text style={styles.date}>{category}</Text>
            <Text style={styles.title}>{title}</Text>
        </View>
        <View
        style={styles.counterContainer}
      >
       <View
          style={styles.counter}
        >
          <Text style={[styles.counterText,{color:bgColor}]}>{amount}</Text>
          <Text style={styles.counterLabel}>Cantidad</Text>
        </View>   
      </View>
    </View>
    )
}

export default Transaction;