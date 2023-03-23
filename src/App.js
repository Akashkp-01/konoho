import logo from './logo.svg';
import './App.css';
import Addmovie from './component/Addmovie';
import Read1 from './component/Read1';
import Nav from './component/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
 <BrowserRouter>
      <Nav/>
      
      <Routes>
        <Route path='/' element={<Addmovie/>}/>
        <Route path='/addmovies' element={<Addmovie data={{id:'',movies:'',director:'',language:'',genere:'',releasedate:''}} method="post"/>}/>
        <Route path='/read1' element={<Read1/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
