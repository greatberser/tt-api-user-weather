'use client';

import { useState, useEffect } from 'react';
import UserCard from '../UserCard/UserCard';
import { fetchUsers, fetchWeather } from '../../api/api';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Функція для завантаження користувачів
  const loadUsers = async () => {
    try {
      setLoading(true);
      const fetchedUsers = await fetchUsers(6); // Завантажуємо 6 користувачів
      setUsers((prevUsers) => [...prevUsers, ...fetchedUsers]);
      setLoading(false);
    } catch (error) {
      console.error('Error loading users:', error);
      setLoading(false);
    }
  };

  // Обробник для збереження користувача в LocalStorage
  const handleSaveUser = (user) => {
    const savedUsers = JSON.parse(localStorage.getItem('savedUsers')) || [];
    localStorage.setItem('savedUsers', JSON.stringify([...savedUsers, user]));
    alert(`${user.name.first} ${user.name.last} saved!`);
  };

  // Обробник для показу погоди в модальному вікні
  const handleShowWeather = async (user) => {
    try {
      const weatherData = await fetchWeather(
        user.location.coordinates.latitude,
        user.location.coordinates.longitude
      );
      alert(
        `Weather for ${user.location.city}: ${weatherData.temperature}°C, ${weatherData.weathercode}`
      );
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };

  // Завантажуємо перших 6 користувачів при першому рендері
  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <ul className="flex flex-wrap justify-center w-full">
        {users.map((user) => (
          <UserCard
            key={user.login.uuid}
            user={user}
            onSave={() => handleSaveUser(user)}
            onShowWeather={() => handleShowWeather(user)}
          />
        ))}
      </ul>
      <button
        onClick={loadUsers} // Завантажуємо користувачів при натисканні на кнопку
        className="bg-gray-500 text-white px-4 py-2 rounded m-4"
      >
        {loading ? 'Loading...' : 'Load More Users'}
      </button>
    </div>
  );
};

export default UserList;
