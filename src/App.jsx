import React, { useEffect, useState } from 'react';
import UserCard from './components/UserCard';
import { fetchUsers } from './services/UserFetch';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    loadUsers();
  }, []);

  const updateUser = (updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  const removeUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
        <div className="container-fluid py-4 ms-0">
        {/* <h1 className="text-center mb-4">User List</h1> */}
        <div className="row">
            {users.map((user) => (
            <UserCard
                key={user.id}
                user={user}
                onUpdate={updateUser}
                onRemove={removeUser}
            />
            ))}
        </div>
        </div>

  );
};

export default App;
