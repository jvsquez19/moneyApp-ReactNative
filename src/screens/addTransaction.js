import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    TextInput,
    StyleSheet,
    Picker,
} from 'react-native';
import { observer } from 'mobx-react';
import TransactionStore from '../store/transactionsStore'
import uuid from 'react-native-uuid'

const CATEGORIES = [
    'Alimentación',
    'Transporte',
    'Electronicos',
    'Otros'
]


const styles = StyleSheet.create({
    fieldContainer: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#fff'
    },
    text: {
        height: 40,
        margin: 0,
        marginRight: 7,
        paddingLeft: 10,

    },
    button: {
        height: 50,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        alignSelf: 'stretch',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    borderTop: {
        borderColor: '#edeeef',
        borderTopWidth: 0.5

    },

})

@observer
class AddTransactionForm extends Component {
    state = {
        title: '',
        category: '',
        description: '',
        type: 'ingreso',
        amount: '',
        id: ''
    }
    handleAddPress = () => {
        id = uuid.v1()
        this.setState({id})
        TransactionStore.addTransaction({...this.state,id:id})
        this.props.navigation.navigate('Transactions')
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.fieldContainer}>
                    <TextInput
                        style={styles.text}
                        placeholder="Title"
                        value={this.state.title}
                        onChangeText={(value) => { this.setState({ title: value }) }}
                        spellCheck={false}
                    />
                    <Picker style={styles.text}
                        selectedValue={this.state.type}
                        onValueChange={(itemValue, itemIndex) =>{
                            this.setState({type: itemValue })}
                        }>
                        <Picker.Item label="ingreso" value="ingreso" />
                        <Picker.Item label="gasto" value="gasto" />
                    </Picker>
                    <TextInput
                        style={styles.text}
                        placeholder="Description"
                        value={this.state.description}
                        onChangeText={(value) => { this.setState({ description: value }) }}
                        spellCheck={false}
                    />
                    <Picker style={styles.text}
                        selectedValue={this.state.category}
                        onValueChange={(itemValue, itemIndex) =>{
                            this.setState({category: itemValue })}
                        }>
                        {
                            CATEGORIES.map((item)=>{
                               return <Picker.Item key={item} label={item} value={item} />
                            })
                        }
                        
                    </Picker>
                    <TextInput
                        style={styles.text}
                        placeholder="Amount"
                        value={this.state.amount.toString()}
                        onChangeText={(value) => { this.setState({ amount: parseInt(value) ? parseInt(value) : '' }) }}
                        spellCheck={false}
                        keyboardType={'number-pad'}
                    />

                </View>
                <TouchableHighlight onPress={this.handleAddPress} style={styles.button}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableHighlight>


            </View>
        )
    }
}

export default AddTransactionForm;