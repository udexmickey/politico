import {BrowserRouter , Routes , Route} from 'react-router-dom'
import './App.scss';
import Auth from './Pages/Auth';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/auth" element={<Auth />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
