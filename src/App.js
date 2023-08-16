import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import About from './component/About';
import NavBar from './component/NavBar';
import Home from './component/Home';
import User from './component/User';
import UserId from './component/UserId'

import { GetAllUsers } from './services/GetAllUsers';
import UsersList from './component/UsersList';

function App() {
  return (
    <div className="container">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/usersList' element={<UsersList/>}/>
        <Route path='/userId' element={<UserId/>}/>
      </Routes>
    </div>
  );
}
export default App;
