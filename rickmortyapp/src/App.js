import './App.css';
import GridView from './components/GridView';
import Header from './components/Header';
import Information from './components/Information';

function App() {
  return (
    <div className="App"> 
     <Header tittle = "Rick and Morty"  color ="orange" ></Header>
     <div className='main-container'>
     <GridView></GridView>
     </div>
    </div>
  );
}

export default App;
