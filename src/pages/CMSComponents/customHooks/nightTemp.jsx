export const fetchNightTemperature = async () => {
    try {
      const getPosition = () => {
        return new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
      };
  
      const position = await getPosition();
  
      const { latitude, longitude } = { latitude: 59.325, longitude: 18.05 };
      {/* Duger detta API? eller ska vi leta vidare. Dock är detta för */}
      const response = await fetch(`https://api.open-meteo.com/v1/dwd-icon?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&hourly=temperature_2m&timezone=Europe%2FBerlin&forecast_days=1`);
      const data = await response.json();
      return data.hourly.temperature_2m[23];
    } catch (error) {
      
      return null;
    }
  };
  