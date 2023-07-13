import '../styles/App.css';
import CharacterList from '../components/Pages/Character/CharacterList';
import { Route, Routes } from 'react-router-dom';
import NavBar from '../components/Core/NavBar';
import Register from '../components/Pages/Login/Register';
import CharacterDetail from '../components/Pages/Character/CharacterDetail';
import Home from '../components/Pages/Home/Home';
import Login from '../components/Pages/Login/Login'
import Account from '../components/Pages/Account/Account'
import { JwtContext } from './Context/jwtContext';
import { useState } from 'react';
import { RequireAuth } from './Shared/RequiereAuth';


function App() {

  const [jwt, setJwt] = useState(null)

  return (
    <div className="App">
      <JwtContext.Provider value={{jwt, setJwt}}>
      <NavBar />

      <Routes>
        <Route path='/characterlist' element={<CharacterList />}/>
        <Route path='/form' element={<Register />}/>
        <Route path='/characterdetail/:id' element={<CharacterDetail/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/account' element={<RequireAuth><Account/></RequireAuth>} />
      </Routes>
      </JwtContext.Provider>
    </div>

  );
}

export default App;

