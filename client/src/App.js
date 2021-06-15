import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import { TransactionsProvider } from './contexts/transactions/TransactionsProvider';

function App() {
  return (
    <TransactionsProvider>
      <Header>Expense Tracker</Header>
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </TransactionsProvider>
  );
}

export default App;
