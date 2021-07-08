import React, { useState, useEffect } from 'react'
import './App.scss'
import { getRandomUsers } from "./api";
import UserCard from './UserCard';

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getRandomUsers(20).then(users => setUsers(users));
  }, [])

  return (
    <div className="App">
      <div className="users">
        {users.map(u => <UserCard user={u} />)}
      </div>
    </div>
  )
}

export default App
