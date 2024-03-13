export const fetchNightTemperature = async () => {
  try {
    const { latitude, longitude } = { latitude: 59.325, longitude: 18.05 };
    // Duger detta API? eller ska vi leta vidare.
    const response = await fetch(`https://api.open-meteo.com/v1/dwd-icon?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&hourly=temperature_2m&timezone=Europe%2FBerlin&forecast_days=1`);
    const data = await response.json();
    console.log(data.hourly.temperature_2m[23]);
    return data.hourly.temperature_2m[23];
  } catch (error) {
    return null;
  }
};

export const homelessAmount = async () => {

  var randomAmount = Math.floor(Math.random() * 5) - 5;
  var amount = 780
  return randomAmount + amount;

};