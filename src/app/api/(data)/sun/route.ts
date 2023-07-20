// https://sunrise-sunset.org/api
// https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=today

export async function GET(request: Request) {
    const latitude = 36.7201600; // Latitude of the desired location
    const longitude = -4.4203400; // Longitude of the desired location
    const date = new Date().toISOString().split('T')[0]; // Current date in the format "YYYY-MM-DD"
  
    const apiUrl = `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=${date}`;
  
    // Make the GET request to the Sunrise-Sunset API
    const response = await fetch(apiUrl);
    const data = await response.json();
  
    // Extract the sunrise and sunset times from the response
    const sunrise = data.results.sunrise;
    const sunset = data.results.sunset;
  
    // Return the sunrise and sunset data as a JSON response
    return new Response(JSON.stringify({
      sunrise,
      sunset
    }));
  }
  

