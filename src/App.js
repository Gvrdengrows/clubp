import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Content from './Components/Content/Content';
import Dialogs from './Components/Dialogs/Dialogs';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';
import Settings from './Components/Settings/Settings';
import News from './Components/News/News';
import Music from './Components/Music/Music';

function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navigation state={props.state.friendList} />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/content' element={< Content
              profilePage={props.state.profilePage}
              dispatch={props.dispatch} />} />
            <Route path='/dialogs' element={< Dialogs store={props.store}/>} />
            <Route path='/music' element={<Music />} />
            <Route path='/news' element={<News />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
