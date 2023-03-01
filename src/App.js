import logo from './logo.svg';
import './App.css';
import { Table } from './components/shared';

function App() {
  return (
    <div className="h-screen flex justify-center items-center bg-emerald-300">
      <div className="w-1/2">
        <Table />
      </div>
    </div>
  );
}

export default App;
