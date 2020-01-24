import {observable, action, computed, autorun} from 'mobx'


class TransactionsStore{
    @observable
    transactions = []

    @computed
    get getCount(){
        return this.transactions.length
    }

    @observable totalIncome = 0
    @observable totalExpenses = 0
    @observable balance = 0

    reactToChange = autorun(()=>{
        let expenses = 0
        let income = 0
        this.transactions.forEach((item)=>{
            if(item.type === 'ingreso'){
                income += item.amount
            }else{
                expenses += item.amount
            }
        })
        this.totalExpenses = expenses
        this.totalIncome = income
        this.balance = income - expenses

    })

    @action
    addTransaction = (transaction)=>{
        this.transactions.push(transaction)
    }
}





export default new TransactionsStore()