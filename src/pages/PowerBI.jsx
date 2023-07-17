import React, { useEffect , useState} from 'react';
import axios from 'axios';

const PowerBI = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const [appData, setappData] = useState([]);


  const fetchData = async () => {
    try {

      const response = await axios.get('https://api.powerbi.com/v1.0/myorg/apps', {
        headers: {
          'authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvOGM0NmFiYzctOTYwYi00MTI0LTg5NTAtMTYyOGIyYjE5MmY5LyIsImlhdCI6MTY4OTU4ODU3OCwibmJmIjoxNjg5NTg4NTc4LCJleHAiOjE2ODk1OTMzNDksImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84VEFBQUFFYUtBREFiQTI5UlVvY1h3OHFIbG1aTlZ5TnBGOXc1akNqRFllOFQ4bWlXM3NrUmVvVnJzQ2VpOThDYzlES2ZQTnYvK0t0RWxNUGNTc3BqMDFBZmg3RUFId21TYm1VSUR5OTA1U2VvMEp2ND0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiMThmYmNhMTYtMjIyNC00NWY2LTg1YjAtZjdiZjJiMzliM2YzIiwiYXBwaWRhY3IiOiIwIiwiZmFtaWx5X25hbWUiOiJKYXNhbmkiLCJnaXZlbl9uYW1lIjoiSGFyc2ggQmhhcmF0YmhhaSIsImlwYWRkciI6IjE4NC4xNDcuOTQuMTY1IiwibmFtZSI6IkhhcnNoIEJoYXJhdGJoYWkgSmFzYW5pICh4MjAyMGZsaSkiLCJvaWQiOiIxNjg5NGViMi00OTU1LTQzNDItOWQ2Zi04NTg1YzkzMGFlZmIiLCJvbnByZW1fc2lkIjoiUy0xLTUtMjEtMTY0MzQ1ODEwMy04NTA3Mjc5OTYtODQ4ODQ3MjE5LTEyODQ1NiIsInB1aWQiOiIxMDAzMjAwMEFBMzQwRDQ3IiwicmgiOiIwLkFYMEF4NnRHakF1V0pFR0pVQllvc3JHUy1Ra0FBQUFBQUFBQXdBQUFBQUFBQUFDMUFMay4iLCJzY3AiOiJBcHAuUmVhZC5BbGwgQ2FwYWNpdHkuUmVhZC5BbGwgQ2FwYWNpdHkuUmVhZFdyaXRlLkFsbCBDb250ZW50LkNyZWF0ZSBEYXNoYm9hcmQuUmVhZC5BbGwgRGFzaGJvYXJkLlJlYWRXcml0ZS5BbGwgRGF0YWZsb3cuUmVhZC5BbGwgRGF0YWZsb3cuUmVhZFdyaXRlLkFsbCBEYXRhc2V0LlJlYWQuQWxsIERhdGFzZXQuUmVhZFdyaXRlLkFsbCBHYXRld2F5LlJlYWQuQWxsIEdhdGV3YXkuUmVhZFdyaXRlLkFsbCBQaXBlbGluZS5EZXBsb3kgUGlwZWxpbmUuUmVhZC5BbGwgUGlwZWxpbmUuUmVhZFdyaXRlLkFsbCBSZXBvcnQuUmVhZC5BbGwgUmVwb3J0LlJlYWRXcml0ZS5BbGwgU3RvcmFnZUFjY291bnQuUmVhZC5BbGwgU3RvcmFnZUFjY291bnQuUmVhZFdyaXRlLkFsbCBUZW5hbnQuUmVhZC5BbGwgVGVuYW50LlJlYWRXcml0ZS5BbGwgVXNlclN0YXRlLlJlYWRXcml0ZS5BbGwgV29ya3NwYWNlLlJlYWQuQWxsIFdvcmtzcGFjZS5SZWFkV3JpdGUuQWxsIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiM3M5eGFXU2J1ZjcxZGlBVjRBenMySlpnbXlDQllNWGVyNEVOTzVMZ3VHVSIsInRpZCI6IjhjNDZhYmM3LTk2MGItNDEyNC04OTUwLTE2MjhiMmIxOTJmOSIsInVuaXF1ZV9uYW1lIjoieDIwMjBmbGlAc3RmeC5jYSIsInVwbiI6IngyMDIwZmxpQHN0ZnguY2EiLCJ1dGkiOiJCeWJCb3RGVFVrR0ZBV0tsZDZLcEFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.M6TvlFyf2AJcbD7Poyr_2u3YJMweGV2skZmENM3Tu37DuA4erzfjOuUdX4oxC-9njJvUnfr_xrPm2Rhh9lu-g33RuPjo51sxg3ebUd9vUWrTyvV7vOVDIKFYpmm_3raaZzxYb4NwFdnoN7dGqiFNcAs3HfkJg9elUgfQWqGr3GMLDgosvgGY1Sx3NSAIO72UUAeWa-rC9dbkblNXhNG2cvx6ThRY0CiSpQ20x_sB_WO9NUbnfo-dLQgsWT0BVfLNh-e1fnXxi-vyNeMLY9uJBIXVsOf8-HBiwe9WJdTS3ThXykgcd-BmpAZCVEcRG5YKYtVnVOC58tqm00ra5w53pg',
        }
      });
      // const data = await response.json();

      setappData(response.data.value);
      console.log(response.data.value); // Handle the API response data here
    } catch (error) {
      console.error('Error fetching data from Power-BI API:', error);
    }
  };

  return (

    
    <div className="container text-black mx-auto p-4">
      {/* Display the app data */}

      {appData.map(item => (
        <div key={item.name}>
          <div className="bg-white rounded shadow p-4 hover:scale-105 transition-transform duration-300 bg rounded shadow p-6">
          <h1 className="text-2xl font-bold mb-4">{item.name}</h1>
          <p className="text-gray-700 mb-2">{item.description}</p>
          <p className="text-gray-400">Last Update: <span className='text-sm text-blue-500'>{item.lastUpdate}</span></p>
          <p className="text-gray-400">Published By: <span className='text-sm text-black'>{item.publishedBy}</span> </p>
        </div>
        </div>
      ))}
      
    </div>
  );
};

export default PowerBI;
