export const fetchUsers = async (results = 6) => {
  try {
    const response = await fetch(
      `https://randomuser.me/api/?results=${results}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const fetchWeather = async (latitude, longitude) => {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m`
    );
    const data = await response.json();
    return data.current_weather;
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
};
