import './App.css';
import Header from './components/Layout/Header';
import Menu from './components/Meals/Menu';

function App() {
  return (
    <div>
      <Header/>
      <main>
        <Menu/>
      </main>
    </div>
  );
}

export default App;
