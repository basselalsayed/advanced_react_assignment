import React, { useState } from 'react';

import UserInput from './Components/UserInput'
import UserOutput from './Components/UserOutput'

import './App.css';

const App = () => {
  const [usernames, changeUsername] = useState(['Tom', 'Dick', 'Harry'])

  const usernameHandler = (e) => {
    changeUsername(['Tom', e.target.value, 'Harry'])
  }
  return (
    <div className="App">
      <UserInput edit={usernameHandler.bind(this)} username={usernames[1]}/>

      <UserOutput username={usernames[0]} />
      <UserOutput username={usernames[1]} />
      <UserOutput username={usernames[2]} />

    </div>
  );
}

export default App;
